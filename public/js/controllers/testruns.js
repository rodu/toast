/* global d3 */
'use strict';

angular.module('mean.testruns').
controller('TestrunsController',
    ['$scope',
     '$stateParams',
     '$location',
     'Global',
     'Testruns',
    function($scope,
             $stateParams,
             $location,
             Global,
             Testruns){

        $scope.global = Global;

        $scope.find = function find() {
            Testruns.query(function testrunQuery(testruns) {
                $scope.testruns = testruns;
                //console.log(testruns);
            });
        };

        (function projectsViewBinding($scope, d3){
            var 
                w = 672,
                h = 490,
                r = Math.min(w, h) / 2,
                color,
                vis,
                partition,
                arc,

                initializeSunburst = function(){
                     //color = d3.scale.category20c();
                    color = function color(r){
                        if (r >= 0 && r < 1){
                            return d3.rgb(200 + (200 * r), 200 * r, 75);
                        }
                        return d3.rgb(75, 200, 75);
                    };

                    vis = d3.select("#sunburst").append("svg:svg")
                        .attr("width", w)
                        .attr("height", h)
                        .append("svg:g")
                        .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

                    partition = d3.layout.partition()
                        .sort(null)
                        .size([2 * Math.PI, r * r])
                        .value(function() { return 1; });

                    arc = d3.svg.arc()
                        .startAngle(function(d) { return d.x; })
                        .endAngle(function(d) { return d.x + d.dx; })
                        .innerRadius(function(d) { return Math.sqrt(d.y); })
                        .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });
                },

                renderSunsurst = function () {
                    //console.log(sunburstDS);
                    //resetChart();
                    vis.data([{
                            name: 'flare',
                            children: $scope.testruns[$scope.testruns.length - 1].children
                        }]).selectAll("path")
                    .data(partition.nodes)
                    .enter().append("svg:path")
                    .attr("display", function(d) { return d.depth ? null : "none"; }) // hide inner ring
                    .attr("d", arc)
                    .on("mouseover", function(d) {
                        var itemText,
                            depthRead = d.depth,
                            currentD = d,
                            labels = ["Suite", "Module", "Test", "Assertion"];

                        // Reset all higher levels first
                        /*for (i = depthRead; i <= 4; i++){
                            d3.select("#detail" + i).text("");
                        }*/

                        while (depthRead > 0){
                            itemText = "<strong>" + labels[depthRead - 1] + ":</strong> " + currentD.name + currentD.result;
                            d3.select("#detail" + depthRead).html(itemText);

                            currentD = currentD.parent;
                            depthRead -= 1;

                            console.log(itemText);
                        }
                    })
                    .attr("fill-rule", "evenodd")
                    .style("stroke", "#fff")
                    .style("fill", function(d){
                            return color(typeof d.result !== "undefined" ?
                                +d.result : d.passed / d.total);
                        });
                };

                // Interpolate the arcs in data space.
                /*arcTween = function (a) {
                    var i = d3.interpolate({x: a.x0, dx: a.dx0}, a);
                    return function(t) {
                        var b = i(t);
                        a.x0 = b.x;
                        a.dx0 = b.dx;
                        return arc(b);
                    };
                },

                buildDataSet = function buildDataSet(){
                    // body
                };            
                */
            $scope.showProjects = function showProjects(){
                var populateView = function populateView(){
                        initializeSunburst();
                        renderSunsurst();
                    };
                if ($scope.testruns){
                    populateView();
                }
                else {
                    Testruns.query(function testrunQuery(testruns) {
                        $scope.testruns = testruns;
                        populateView();
                    });
                }
            };

        }($scope, d3));

        /*$scope.findOne = function() {
            Articles.get({
                articleId: $stateParams.articleId
            }, function(article) {
                $scope.article = article;
            });
        };*/
    }
]);