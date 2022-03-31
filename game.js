var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();

        started = true;

    };
});

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");


    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);

});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();

        $("body").addClass("red")
        setTimeout(function() {
            $("body").removeClass("red");
        }, 100);

        $("h1").text("Game Over, Press Any Key to Restart");


        startover();
        console.log("wrong");


    }

}

function startover() {
    level = 0;
    started = false;
    gamePattern = [];
}


function nextSequence() {

    userClickedPattern = [];

    // ADD LEVEL START
    level++;

    $("#level-title").text("Level " + level);
    //ADD LEVEL END


    var randomNumber = Math.floor(Math.random() * 4);


    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}

function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed"), 100;

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed")
    }, 100);
}