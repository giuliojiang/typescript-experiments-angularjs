import angular = require("angular");

var mainApp = angular.module("mainApp", []);

mainApp.controller("mainController", function($scope) {
    $scope.name = "ciao";
    console.info("Controller loaded");
});