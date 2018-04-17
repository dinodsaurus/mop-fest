"use strict";
angular.module("mopfest2015")
.factory("GuestService", function($q, $http) {
  var GuestService = {};

  GuestService.getGuests = function () {
    var q = $q.defer();
    $http.get("guests.json").
      success( data => {
        q.resolve(data);
      }).
      error( err => {
        q.reject(err);
      });
    return q.promise;
  };

  return GuestService;
});
