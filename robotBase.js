var battleDome = battleDome || {};
// battleDome.robot ={};
// Base function
battleDome.robot = function() {

  this.health = Math.floor(Math.random() * 40 + 50);

}

//Drone function
battleDome.Drone = function (name,type,health) {
  this.mode= "Aerial";
  this.health = this.health  + health;
  this.name = name;
  this.type = type;
}
battleDome.Drone.prototype = new battleDome.robot()


//Bi-pedal function
battleDome.Bipedal = function (name,type,health) {
  this.mode = "Ground";
  this.health = this.health  + health;
  this.name = name;
  this.type = type;
}
battleDome.Bipedal.prototype = new battleDome.robot();

//atv function
battleDome.Atv =function (name,type,health) {
  this.mode = "Aerial and Ground";
  this.health = this.health  + health;
  this.name = name;
  this.type = type;

}
battleDome.Atv.prototype = new battleDome.robot();
