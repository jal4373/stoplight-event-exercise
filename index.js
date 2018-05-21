(function () {
  'use strict';

  // YOUR CODE HERE
  let stopButton = document.getElementById('stopButton');
  let slowButton = document.getElementById('slowButton');
  let goButton = document.getElementById('goButton');
  let stopLightOn = false;
  let slowLightOn = false;
  let goLightOn = false;


  //mouse

  stopButton.addEventListener("mouseenter", function (event) {
    console.log("Entered", event.target.textContent, "button");
  });

  stopButton.addEventListener("mouseleave", function (event) {
    console.log("Left", event.target.textContent, "button");
  });

  slowButton.addEventListener("mouseenter", function (event) {
    console.log("Entered", event.target.textContent, "button");
  });

  slowButton.addEventListener("mouseleave", function (event) {
    console.log("Left", event.target.textContent, "button");
  });

  goButton.addEventListener("mouseenter", function (event) {
    console.log("Entered", event.target.textContent, "button");
  });

  goButton.addEventListener("mouseleave", function (event) {
    console.log("Left", event.target.textContent, "button");
  });

  document.getElementById('controls').addEventListener('click', function (e) {

    if (e.target && e.target.id == 'stopButton') {
      let stopLight = document.getElementById('stopLight');
      if (stopLightOn) {
        stopLightOn = false;
        console.log(event.target.textContent, "bulb off");
        return stopLight.classList.remove("stop");

      } else {
        stopLightOn = true;
        console.log(event.target.textContent, "bulb on");
        return stopLight.classList.add("stop");
      }

    } else if (e.target && e.target.id == 'slowButton') {
      let goLight = document.getElementById('goLight');
      if (goLightOn) {
        goLightOn = false;
        console.log(event.target.textContent, "bulb off");
        return goLight.classList.remove("go");

      } else {
        goLightOn = true;
        console.log(event.target.textContent, "bulb on");
        return goLight.classList.add("go");
      }

    } else if (e.target && e.target.id == 'goButton') {

      let goLight = document.getElementById('goLight');
      if (goLightOn) {
        goLightOn = false;
        console.log(event.target.textContent, "bulb off");
        return goLight.classList.remove("go");

      } else {
        goLightOn = true;
        console.log(event.target.textContent, "bulb on");
        return goLight.classList.add("go");
      }
    }
  });


})();