battleDome.Drone.Dji = function (name,type,health) {
  this.health = this.health  + health;
  this.name = name;
  this.type = type;
}
 battleDome.Drone.Dji.prototype = new battleDome.Drone()

battleDome.Drone.Yun = function (name,type,health) {
  this.health = this.health  + health;
  this.name = name;
  this.type = type;
}
 battleDome.Drone.Yun.prototype = new battleDome.Drone()

battleDome.Bipedal.Asimo = function (name,type,health) {
  this.health = this.health  + health;
  this.name = name;
  this.type = type;
}
 battleDome.Bipedal.Asimo.prototype = new battleDome.Bipedal()

 battleDome.Bipedal.Petman = function (name,type,health) {
  this.health = this.health  + health;
  this.name = name;
  this.type = type;
}
 battleDome.Bipedal.Petman.prototype = new battleDome.Bipedal()

 battleDome.Atv.Dune = function (name,type,health) {
  this.health = this.health  + health;
  this.name = name;
  this.type = type;
}
 battleDome.Atv.Dune.prototype = new battleDome.Atv()

 battleDome.Atv.Sand = function (name,type,health) {
  this.health = this.health  + health;
  this.name = name;
  this.type = type;
}
 battleDome.Atv.Sand.prototype = new battleDome.Atv()
