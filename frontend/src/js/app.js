'use strict';

var servicesMapApp = angular.module('servicesMapApp', []);

servicesMapApp.config(function($routeProvider) {
    $routeProvider.
        when('/:serviceSlug', {
            controller: "servicesMapCtrl",
            templateUrl: "/views/service_map_info.html"
        }).
        when('/:serviceSlug/:date', {
            controller: "servicesMapCtrl",
            templateUrl: "/views/service_map_info.html"
        }).
        otherwise({
            redirectTo: '/graffiti_removal'
        });
});

var wardMapApp = angular.module('wardMapApp', []);

wardMapApp.config(function($routeProvider) {
    $routeProvider.
        when('/:serviceSlug', {
            controller: "wardMapCtrl",
            templateUrl: "/views/ward_map_info.html"
        }).
        when('/:serviceSlug/:date', {
            controller: "servicesMapCtrl",
            templateUrl: "/views/wardMapCtrl.html"
        }).
        otherwise({
            redirectTo: '/graffiti_removal'
        });
});
