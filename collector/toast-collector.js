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
        TOAST_URL = "http://localhost:3000",
        assertionResults = [],
        testResults = [],
        moduleResults = [],
        suiteResults = [],
        addCORSIframe = function(){
            var iframe = document.createElement("iframe");
            iframe.setAttribute("src", TOAST_URL + "/iframe");
            iframe.setAttribute("id", "messenger");
            document.body.appendChild(iframe);
        },
        postResults = function(testruns){
            var iframe = document.getElementById("messenger");
            iframe.contentWindow.postMessage(testruns, TOAST_URL);
        };

    // Detects QUnit
    if (typeof window.QUnit !== "undefined"){
        
        addCORSIframe();
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

            postResults(testruns);
        });
    }

}(window));