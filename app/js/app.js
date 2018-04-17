"use strict";
angular.module("mopfest2015", [
  "constants",
  "ui.router",
  "templates",
  "sticky",
  "LocalStorageModule",
  "uiGmapgoogle-maps",
  "ngAnimate",
  "duScroll",
  "ngTouch",
  "duScroll"
])
.config(function ($stateProvider, $urlRouterProvider, $anchorScrollProvider) {
  $stateProvider
  .state("main", {
    abstract: true,
    templateUrl: "main/views/main.html"
  })
  .state("main.home", {
    url: "/",
    views: {
      "content": {
        controller: "HomeController",
        controllerAs: "home",
        templateUrl: "main/views/home.html"
       }
    }
  })
  .state("main.schedule", {
    url: "/schedule?day&guest",
    views: {
      "content": {
        controller: "ScheduleController",
        controllerAs: "schedule",
        templateUrl: "schedule/views/schedule.html"
       }
    }
  })
  .state("main.guests", {
    url: "/guests",
    views: {
      "content": {
        controller: "GuestsController",
        controllerAs: "guests",
        templateUrl: "guests/views/guests.html"
       }
    }
  })
  .state("main.location", {
    url: "/location",
    views: {
      "content": {
        controller: "LocationController",
        controllerAs: "location",
        templateUrl: "location/views/location.html"
       }
    }
  })
  .state("main.partners", {
    url: "/partners",
    views: {
      "content": {
        controller: "PartnersController",
        controllerAs: "partners",
        templateUrl: "partners/views/partners.html"
       }

    }
  })
  .state("main.about", {
    url: "/about",
    views: {
      "content": {
        controller: "AboutController",
        controllerAs: "about",
        templateUrl: "about/views/about.html"
       }
    }
  });
  $anchorScrollProvider.disableAutoScrolling();
  $urlRouterProvider.otherwise("/");
})
;
