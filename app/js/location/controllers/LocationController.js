"use strict";

angular.module("mopfest2015")
.controller("LocationController", function ($scope) {
  $scope.$emit("switchLink", {"nav": "fourth", "text": "Lokacija"});
  this.map = {
    center: { latitude: 46.3084444, longitude: 16.3377778 },
    zoom: 15
  };
  this.options = {
    streetViewControl: false,
    scrollwheel: false,
    styles:[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
  };
  this.markers = [
    {
      id:1,
      coordinates: { latitude: 46.31, longitude: 16.3343 },
      icon: {
        url: "./img/pin_map.png",
      }
    },
    {
      id:2,
      coordinates: { latitude: 46.3096, longitude: 16.3375 },
      icon: {
        url: "./img/pin_map.png",
      }
    },
    {
      id:3,
      coordinates: { latitude: 46.3078, longitude: 16.3359 },
      icon: {
        url: "./img/pin_map.png",
      }
    }
  ];
});
