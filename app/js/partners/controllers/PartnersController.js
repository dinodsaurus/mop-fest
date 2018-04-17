"use strict";

angular.module("mopfest2015")
.controller("PartnersController", function ($scope) {
  $scope.$emit("switchLink", {"nav": "fifth", "text": "Partneri"});
});
