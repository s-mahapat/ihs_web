/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var ihsApp = angular.module('ihs', ['ngRoute']);

//'ngResource', 'datatables',
//'patientControllers', 'ivory.services', 'searchControllers',
// 'errorControllers' 
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
    }).when('/about/faculty_profile_details', {
        templateUrl: 'partials/faculty_profile_details.html'
    }).otherwise('/home');
});