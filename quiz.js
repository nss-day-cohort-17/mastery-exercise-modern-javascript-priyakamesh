var name = "" ;

var enemyName ="";
// var DJIPhantomObj = new battleDome.Drone.DJIPhantom()
// var YuneecObj = new battleDome.Drone.Yuneec()
var playerRobot;
var enemyRobot;


//Initial page setup

$("#page-setup").show()
$(".player-name").focus();
//when the continue button clicked move on to next card
$(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {

      case "card--final":
        moveAlong = ($("#player-name").val()!== "" && $("#enemy-name").val()!== "");
        break;
      }
      if (moveAlong) {
      $("#page-setup").hide();
      $("." + nextCard).show();
    }
  });
//when back button is clicked
$(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card--final").hide();
    $("." + previousCard).show();
  });


//get the name and enemyName

$(".card__link").click( function() {
  name = $("#player-name").val();
  enemyName = $("#enemy-name").val();
  var playerRobotType = $("#target1").val();
  var enemyRobotType = $("#target2").val();

  switch (playerRobotType) {
  case "DJI Phantom 4" :
  playerRobot = new battleDome.Drone(name,playerRobotType,50);
  break;

  case "Yuneec Typhoon H 4K" :
  playerRobot = new battleDome.Drone(name,playerRobotType,80);
  break;
  case "ASIMO" :
  playerRobot = new battleDome.Bipedal(name,playerRobotType,60);
  break;
  case "PETMAN" :
  playerRobot = new battleDome.Bipedal(name,playerRobotType,100);
  break;
  case "Dune Buggy" :
  playerRobot = new battleDome.Atv(name,playerRobotType,110);
  break;
  case "Sand Rail" :
  playerRobot = new battleDome.Atv(name,playerRobotType,150);
  break;

  }
  $(".nameCard1").html(`<div><h3>Player Name : ${playerRobot.name}</h3> <h4>${playerRobot.type}</h4><h4>Health :${playerRobot.health}</div>`)
  switch (enemyRobotType) {
    case "DJI Phantom 4" :
    enemyRobot = new battleDome.Drone(enemyName,enemyRobotType,50);
    break;
    case "Yuneec Typhoon H 4K" :
    enemyRobot = new battleDome.Drone(enemyName,enemyRobotType,80);
    break;


  }
  $(".nameCard2").html(`<div><h3>Enemy Name : ${enemyRobot.name}</h3> <h4>${enemyRobot.type}</h4><h4>Health :${enemyRobot.health}</div>`)
});

//attack button event with damage
$("#attackButton").click(function(){
  var damage;
  switch (playerRobot.type) {
    case "DJI Phantom 4" :
    damage = Math.floor(Math.random() * 3 + 1) + 1;
    break;
    case "Yuneec Typhoon H 4K" :
    damage = 1 + (Math.floor(Math.random() * 3 + 1) + 1);
    break;

}
playerRobot.health = playerRobot.health - damage
$(".nameCard1").html(`<div><h3>Player Name : ${playerRobot.name}</h3> <h4>${playerRobot.type}</h4><h4>Health :${playerRobot.health}</div>`)
switch (enemyRobot.type) {
  case "DJI Phantom 4" :
    damage = Math.floor(Math.random() * 3 + 1) + 1;
    break;
    case "Yuneec Typhoon H 4K" :
    damage = 1 + (Math.floor(Math.random() * 3 + 1) + 1);
    break;

}
enemyRobot.health = enemyRobot.health - damage
$(".nameCard2").html(`<div><h3>Enemy Name : ${enemyRobot.name}</h3> <h4>${enemyRobot.type}</h4><h4>Health :${enemyRobot.health}</div>`)
if (playerRobot.health < 0 || enemyRobot.health < 0) {
  if (playerRobot.health < 0) {
    $(".card--final").html(`<div> ${playerRobot.name} lost the game`);
  } else ($(".card--final").html(`<div>${playerRobot.name} won the game`))
}
})
