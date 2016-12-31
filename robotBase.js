var battleDome = battleDome || {};
// battleDome.robot ={};
// Base function
battleDome.robot = function() {

  this.health = Math.floor(Math.random() * 40 + 50);

}

//Drone function
battleDome.Drone = function () {
  this.mode= "Aerial";
  this.health = this.health +10;
}
battleDome.Drone.prototype = new battleDome.robot()


//Bi-pedal function
battleDome.Bipedal = function () {
  this.mode = "Ground";
  this.health = this.health  + 15;
}
battleDome.Bipedal.prototype = new battleDome.robot();

//atv function
battleDome.Atv =function () {
  this.mode = "Aerial and Ground";
  this.health = this.health  + 20;
}
battleDome.Atv.prototype = new battleDome.robot();
