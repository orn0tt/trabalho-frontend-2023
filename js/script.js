var soundEffect = document.getElementById("sound-effect");
var audio = document.getElementById("myAudio");
var muteButton = document.getElementById("muteButton");
var fKeyPressed = false;
var startTime = 0;
var timerInterval;

document.addEventListener("keydown", function (event) {
  if (!fKeyPressed && (event.key === "f" || event.key === "F")) {
    document.body.classList.add("reveal");
    document.getElementById("red-ball").style.display = "block";
    document.getElementById("rec-text").style.display = "block";
    document.getElementById("timer").style.display = "block";
    document.getElementById("press-f-text").style.display = "none";
    soundEffect.play();
    fKeyPressed = true;
    startTime = Date.now();
    startTimer();
  }
});

function startTimer() {
  timerInterval = setInterval(updateTimer, 10);
  document.getElementById("rec-timer-container").style.display = "block";
}

function updateTimer() {
  var currentTime = Date.now() - startTime;
  var hours = Math.floor(currentTime / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
  var minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  var seconds = Math.floor((currentTime % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");
  var milliseconds = Math.floor((currentTime % 1000) / 10)
    .toString()
    .padStart(2, "0");
  var timerText = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
  document.getElementById("timer").textContent = timerText;
}

function stopTimer() {
  clearInterval(timerInterval);
}

var barrelButton = document.getElementById("barrel-button");
var sidebar = document.getElementById("sidebar");

barrelButton.addEventListener("click", function () {
  barrelButton.classList.toggle("active");
});

muteButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    muteButton.style.backgroundImage = "url('../img/mute-icon.png')";
  } else {
    audio.pause();
    muteButton.style.backgroundImage = "url('../img/mute-icon.png')";
  }
});

muteButton.addEventListener("mouseover", function () {
  muteButton.style.transform = "scale(1.1)";
});

muteButton.addEventListener("mouseout", function () {
  muteButton.style.transform = "scale(1)";
});
