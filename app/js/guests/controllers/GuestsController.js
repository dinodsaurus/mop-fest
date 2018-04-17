"use strict";

angular.module("mopfest2015")
.controller("GuestsController", function ($scope, GuestService) {
  var self = this;
  self.guests = [];

  $scope.$emit("switchLink", {"nav": "third", "text": "Gosti"});
  GuestService.getGuests().then(data => {
    data.guests.forEach(guest => {
      if(!guest.guestNoShow){
        self.guests.push(guest);
      }
    });
    data.guests2.forEach(guest => {
      if(!guest.same && !guest.guestNoShow){
        self.guests.push(guest);
      }
    });
    data.guests3.forEach(guest => {
      if(!guest.same && !guest.guestNoShow){
        self.guests.push(guest);
      }
    });
  });

});
