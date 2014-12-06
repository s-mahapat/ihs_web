/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var ihsApp = angular.module('ihs', ['ngRoute']);
 
ihsApp.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'partials/home.html'
    }).when('/about', {
        templateUrl: 'partials/about.html'
    }).when('/about/mission', {
        templateUrl: 'partials/mission.html'
    }).when('/about/vision', {
        templateUrl: 'partials/vision.html'
    }).when('/about/orgstructure', {
        templateUrl: 'partials/orgstructure.html'
    }).when('/project/archives', {
        templateUrl: 'partials/project_archive.html'
    }).when('/project/archive/burdenofdisease', {
        templateUrl: 'partials/burden_of_disease.html'
    }).otherwise('/home');
});

ihsApp.value('constants', 
    {'ihs_email': 'ihs@ihsnet.org.in'}
);

ihsApp.controller('mainController',
    function($scope, constants){
        $scope.ihs_email = constants.ihs_email; //'ihs@ihsnet.org.in';
    }
);