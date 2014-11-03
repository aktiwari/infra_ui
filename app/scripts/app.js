'use strict';

/**
 * @ngdoc overview
 * @name infraApp
 * @description
 * # infraApp
 *
 * Main module of the application.
 */
angular
  .module('infraApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'navList',
    'angularCharts',
    'LocalStorageModule',
    'PaginationMdoule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
    //localStorageServiceProvider.set('localStorageKey','Add this!');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/disk-list', {
        templateUrl: 'views/disk/disk-list.html',
        controller: 'diskListCtrl'
      })
      .when('/disk-new', {
        templateUrl: 'views/disk/disk-new.html',
        controller: 'diskNewCtrl'
      })
      .when('/disk-edit/:id', {
        templateUrl: 'views/disk/disk-edit.html',
        controller: 'diskEditCtrl'
      })
      .when('/disk-show/:id', {
        templateUrl: 'views/disk/disk-show.html',
        controller: 'diskShowCtrl'
      })
      .when('/migration', {
        templateUrl: 'views/migration/migration.html',
        controller: 'MigrationtCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
