window.onload = function () {
  var seconds = 0;
  var tens = 0;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  buttonStart.addEventListener("click", function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 100);
  });

  function startTimer() {
    tens++;
    if (tens <= 9) {
      appendTens.textContent = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 60) {
      seconds++;
      appendSeconds.textContent = "0" + seconds;
      tens = 0;
      appendTens.textContent = "0" + tens;
    }

    if (seconds > 9) {
      appendSeconds.textContent = seconds;
    }
  }

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };
  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };
};
