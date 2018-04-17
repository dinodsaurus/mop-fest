"use strict";

describe("Main Conttroller tests", function(){
  var scope,controller;

  beforeEach(module("mopfest2015"));

  describe("should test the main controller", function () {
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller("MainController", {
        $scope: scope
      });
    }));

    it("currentActive should not be defined", inject(function() {
      expect(scope.currentActive).toBeFalsy();
    }));
  });
});
