"use strict";

(function(){

    angular
        .module('myApp')
        .directive('rssReader', rssReader);

    function rssReader($http){

        return {
            "restrict": "E",
            "templateUrl": "directive/rss-reader/template.html",
            "link": function(scope, elem, attr, ctrl){
                scope.options = JSON.parse(attr.options);
                scope.IsBlank = scope.options.SingleWindow == true ? "_blank" : "_self";
                scope.WidgetProps = scope.options.WidgetStyle || {'height': 'auto', 'width': '600px', 'overflow': 'hidden', 'margin': '10px', 'position': 'absolute'};
                scope.RssResponse = [];

                function loadFeed(){
                    if (scope.options.Urls.length > 0) {
                        scope.options.Urls.forEach(function(u){
                            parseFeed(u).success(function(res){
                                res.responseData.feed.entries.forEach(function(item){
                                    scope.RssResponse.push(item);
                                });
                                scope.feeds = generateRssItems(scope.RssResponse);
                            });
                        });
                    }
                }
                loadFeed();

                function parseFeed(url){
                    return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
                }

                function generateRssItems(rssResponse) {
                    var filter = scope.options.GroupsList || [],
                        newColl = [], tempRes, result;
                    if (rssResponse && filter.length > 0) {
                        rssResponse.forEach(function(i){
                            result = filter.some(function(f){
                                tempRes = i.contentSnippet.indexOf(f) > -1 || i.title.indexOf(f) > -1 && i;
                                return i.contentSnippet.indexOf(f) > -1 || i.title.indexOf(f) > -1;
                            });
                            result && newColl.push(tempRes);
                        });
                    }
                    if (rssResponse && filter.length == 0) {
                        newColl = rssResponse;
                    }
                    return newColl;
                }
                scope.updateRssItems = function(group){
                    scope.options.GroupsList.forEach(function(g, i){
                        g == group && scope.options.GroupsList.splice(i,1);
                    });
                    scope.feeds = generateRssItems(scope.RssResponse);
                };

                scope.$watchCollection('options.GroupsList', function(newVal){
                    var defaultCss = {'margin':'20px 0 0 0', 'overflow-y': 'scroll', 'width':'100%', 'height': '300px'},
                        css;

                    if (scope.options.RssBlockStyle) {
                        css = {
                            "margin": scope.options.RssBlockStyle.margin || defaultCss.margin,
                            "overflow-y": scope.options.RssBlockStyle['overflow-y'] || defaultCss['overflow-y'],
                            "width": scope.options.RssBlockStyle.width || defaultCss.width,
                            "height": scope.options.RssBlockStyle.height || defaultCss.height
                        };
                    } else {
                        css = defaultCss;
                    }
                    if (newVal.length == 0) {
                        css.height = parseInt(css.height) + 80 + "px";
                    }
                    scope.RssItemsStyle = css;
                });

            }
        };

    }

    rssReader.$inject = ['$http'];

})();