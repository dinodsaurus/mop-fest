"use strict";

angular.module("mopfest2015")
.controller("HomeController", function ($scope) {
  $scope.$emit("switchLink", {"nav": "first", "text": "Digital world in focus"});

});
