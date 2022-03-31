"use strict";

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
$(document).keypress(function (e) {
  if (keypress = true) {
    var level = 0;

    for (level = 0; level <= 100; level++) {
      $("#level-title").text("Level " + 0);
      nextSequence();
      playSound(e.name);
    }

    ;
  }
});
$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  console.log(userClickedPattern);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed"), 100;
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}