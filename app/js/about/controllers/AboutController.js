"use strict";

angular.module("mopfest2015")
.controller("AboutController", function ($scope) {
  $scope.$emit("switchLink", {"nav": "fifth", "text": "O nama"});

});
