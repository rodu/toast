/**
 * This is the Toast test results collector.
 * 
 * The collector is meant to be included and used from a client application test
 * runner.
 * 
 * The collector's duty is to listen for callback events on the test runner of
 * choice used in the browser, collect the dispatched results and post that in
 * a single request to the toast server.
 *
 */
(function(window){
    "use strict";
    var
        TOAST_SERVER_URL = "http://localhost:3000",
        corsIframe,
        // Cross-browser event attaching
        onEvent = window.addEventListener || window.attachEvent ||  function(){
                console.error("Not support for standard event listeners... Come on...");
            },
        assertionResults = [],
        testResults = [],
        moduleResults = [],
        suiteResults = [];
    // Detects QUnit
    if (typeof window.QUnit !== "undefined"){
        // Adds iframe to enable CORS requests
        corsIframe = document.createElement("iframe");
        corsIframe.setAttribute("src", TOAST_SERVER_URL + "/iframe");
        corsIframe.setAttribute("style", "display:none;");
        document.body.appendChild(corsIframe);

        // Registers event listener to handle messages from the iframe
        onEvent("message", function(event){
            if (event.data.success){
                console.log("Test results were collected:",
                            event.data.message);
            }
            else {
                console.log("Test data collection failed:",
                            event.data.message);   
            }
        });

        // Register callback for assertion results
        QUnit.log(function(details){
            assertionResults.push(details);
        });

        // Registers callback for test results
        QUnit.testDone(function(details){
            details.children = assertionResults.slice();
            testResults.push(details);

            assertionResults = [];
        });

        // Registers callback for module results
        QUnit.moduleDone(function(details){
            details.children = testResults.slice();
            moduleResults.push(details);

            testResults = [];
        });

        // Registers callback for suite results
        QUnit.done(function(details){
            var testruns = {};
            
            details.children = moduleResults.slice();
            suiteResults.push(details);

            testruns.name = "Diplodoc";
            testruns.children = suiteResults.slice();
            moduleResults = [];
            suiteResults = [];
            // Sends results to iframe for the CORS post request
            corsIframe.contentWindow.postMessage({
                    testruns: testruns
                }, TOAST_SERVER_URL);
        });
    }

}(window));