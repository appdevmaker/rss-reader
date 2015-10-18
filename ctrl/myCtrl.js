"use strict";

(function(){

    angular
        .module('myApp')
        .controller('myCtrl', myCtrl);

    function myCtrl($scope){

        $scope.rssOptions = {
            "DisplaySearchField": true,
            "GroupsList": ["How"],
            "Max": 10,
            "RssBlockStyle": {
                "width": "100%",
                "height": "300px",
                "overflow-y": "scroll",
                "margin": "20px 0 0 0"
            },
            "SingleWindow": true,
            "Title": "Food News",
            "Urls": [
                "http://feeds.epicurious.com/latestfeatures",
                "http://feeds.epicurious.com/newrecipes"
            ],
            "WidgetStyle": {
                'height': '500px',
                'width': '500px',
                'margin': '10px'
            }
        };

    }

    myCtrl.$inject = ['$scope'];

})();