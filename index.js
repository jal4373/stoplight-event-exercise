(function() {
  'use strict';

  // YOUR CODE HERE
  let stopButton = document.getElementById('stopButton');
  let slowButton = document.getElementById('slowButton');
  let goButton = document.getElementById('goButton');
  let stopLightOn = false;
  let slowLightOn = false;
  let goLightOn = false;


  // Lights
  stopButton.addEventListener('click', function () {
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
  });

  slowButton.addEventListener('click', function () {
    let slowLight = document.getElementById('slowLight'); 
    if (slowLightOn) {

      slowLightOn = false;
      console.log(event.target.textContent, "bulb off");
      return slowLight.classList.remove("slow");

    } else {
      slowLightOn = true;
      console.log(event.target.textContent, "bulb on");
      return slowLight.classList.add("slow");
    }
  });

  goButton.addEventListener('click', function () {
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
  });

    //mouse

  stopButton.addEventListener("mouseenter", function(event) {
    console.log("Entered", event.target.textContent, "button");
    
  });

  stopButton.addEventListener("mouseleave", function(event) {
    console.log("Left", event.target.textContent, "button");
  });

  slowButton.addEventListener("mouseenter", function(event) {
    console.log("Entered", event.target.textContent, "button");
  });

  slowButton.addEventListener("mouseleave", function(event) {
    console.log("Left", event.target.textContent, "button");
  });

  goButton.addEventListener("mouseenter", function(event) {
    console.log("Entered", event.target.textContent, "button");
  });

  goButton.addEventListener("mouseleave", function(event) {
    console.log("Left", event.target.textContent, "button");
  });

  
})();