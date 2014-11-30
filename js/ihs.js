/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var ihsApp = angular.module('ihs', ['ngRoute']);

//'ngResource', 'datatables',
//'patientControllers', 'ivory.services', 'searchControllers',
// 'errorControllers' 
ihsApp.config(function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl : 'partials/home.html'
	}).when('/about', {
            templateUrl : 'partials/about.html'
        }).otherwise('/home');
        });