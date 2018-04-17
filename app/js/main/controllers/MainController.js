"use strict";

angular.module("mopfest2015")
.controller("MainController", function (localStorageService, $window, $scope, $document, SoundService) {
  var self = this;
  var oldImg;
  self.sound = (localStorageService.get("sound") !== "nosound") ? true : false;
  self.headText = "Digital world<br/> in focus";
  self.color = localStorageService.get("color") || "green";
  self.currentActive = false;
  this.toggleSound = function () {
    self.sound = !self.sound;
    SoundService.toggleSound(self.sound);

  };
  this.toggleMenu = function () {
    SoundService.playSound();
    self.menu = !self.menu;
  };
  this.changeColor = function (color) {
    self.color = color;
    localStorageService.set("color", color);
  };
  this.switchLink = function (active) {
    $window.scrollTo(0, 0);
    self.menu = false;
    self.currentActive = active;
    self.menuHover = active;
  };
  this.scrollTo = function (num) {
    var h = num;
    if(num === "win"){
      h = $window.innerHeight - 115;
    }else if(num === "win0"){
      h = $window.innerHeight;
    }
    $document.scrollTop(h, 700);
 };
  $scope.$on("switchLink", function (ev, attr) {
    self.headText = attr.text;
    self.currentActive = attr.nav;
    self.menuHover = attr.nav;
    self.generateImage(true);
  });

  this.generateImage = function(noSound){
    var rand;
    if(!oldImg){
      rand = Math.floor((Math.random() * 26) + 1);
      oldImg = Math.floor((Math.random() * 26) + 1);
    }else{
      rand = oldImg;
      oldImg = Math.floor((Math.random() * 26) + 1);
    }
    var img = new Image();
    img.src = "img/cover/cover" + oldImg + ".png";

    self.headImg = {"background-image": "url(img/cover/cover" + rand + ".png)"};
    if(!noSound){
      SoundService.headSound();
    }
  };

  //this.generateImage();
});
