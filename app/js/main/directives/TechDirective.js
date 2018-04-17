"use strict";
angular.module("mopfest2015")
.directive("fullHeight", function($window) {
  return {
    restrict: "A",
    link: function(scope, element) {
      var elementHeight = $window.innerHeight;
      element.css("height", elementHeight + "px");
    }
  };
});
