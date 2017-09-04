var myApp = angular.module('danielapp', ['ui.router']);

//$urlRouterProvider.when('/index','/index.html#!/experience');

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/experience")

  var expState = {
    name: 'exp',
    url: '/experience',
    templateUrl: 'exp.html'
  }

  var eduState = {
    name: 'edu',
    url: '/education',
    templateUrl: 'edu.html'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'about.html'
  }

  $stateProvider.state(expState);
  $stateProvider.state(eduState);
  $stateProvider.state(aboutState);
});
