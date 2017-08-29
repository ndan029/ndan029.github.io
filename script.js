var myApp = angular.module('danielapp', ['ui.router']);

myApp.config(function($stateProvider) {
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

  $stateProvider.state(expState);
  $stateProvider.state(eduState);
});
