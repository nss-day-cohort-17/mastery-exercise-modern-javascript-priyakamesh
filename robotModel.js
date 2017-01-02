battleDome.Drone.Dji = function (name,type,health) {
  this.health = this.health  + health;
  this.name = name;
  this.type = type;
  this.weapon = "Wretched Crux";
}
 battleDome.Drone.Dji.prototype = new battleDome.Drone()

battleDome.Drone.Yun = function (name,type,health) {
  this.health = this.health  + health;
  this.name = name;
  this.type = type;
  this.weapon = "Dreambinder";
}
 battleDome.Drone.Yun.prototype = new battleDome.Drone()

battleDome.Bipedal.Asimo = function (name,type,health) {
  this.health = this.health  + health;
  this.name = name;
  this.type = type;
  this.weapon = "Splinter";
}
 battleDome.Bipedal.Asimo.prototype = new battleDome.Bipedal()

 battleDome.Bipedal.Petman = function (name,type,health) {
  this.health = this.health  + health;
  this.name = name;
  this.type = type;
  this.weapon = "Spark";
}
 battleDome.Bipedal.Petman.prototype = new battleDome.Bipedal()

 battleDome.Atv.Dune = function (name,type,health) {
  this.health = this.health  + health;
  this.name = name;
  this.type = type;
  this.weapon = "Soulsiphon";
}
 battleDome.Atv.Dune.prototype = new battleDome.Atv()

 battleDome.Atv.Sand = function (name,type,health) {
  this.health = this.health  + health;
  this.name = name;
  this.type = type;
  this.weapon ="Thorn";
}
 battleDome.Atv.Sand.prototype = new battleDome.Atv()
