(function () {
  'use strict';

  // YOUR CODE HERE
  let stopButton = document.getElementById('stopButton');
  let slowButton = document.getElementById('slowButton');
  let goButton = document.getElementById('goButton');

  let stopLight = document.getElementById('stopLight')
  let slowLight = document.getElementById('slowLight');
  let goLight = document.getElementById('goLight');

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
    if(e.target.light = "false"){
      e.target.light = "true";
      console.log(event.target.textContent, "bulb on");
    } else {
      e.target.light = "false";
      console.log(event.target.textContent, "bulb off");
    }
    if(e.target.id == 'stopButton') {
      stopLight.classList.toggle('stop');
    } else if (e.target.id == 'slowButton') {
      slowLight.classList.toggle('slow');
    } else if (e.target.id == 'goButton') {
      goLight.classList.toggle('go');
    }
  });
})();