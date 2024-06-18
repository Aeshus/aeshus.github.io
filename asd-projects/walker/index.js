/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  let resizing = false;

  // Game Item Objects
  let walker = {
    css: "#walker",
    position: {
      x: 0, 
      y: 0
    },
    speed: {
      x: 0, 
      y: 0
    },
  }

  let other = {
    css: "#other",
    position: {
      x: 100, 
      y: 100
    },
    speed: {
      x: 0, 
      y: 0
    },
  }

  let walkers = [walker, other];
  

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);                           // change 'eventType' to the type of event you want to handle

  let HEIGHT = $("#board").height();
  let WIDTH = $("#board").width();

  $(walker.css).on("click", () => setRandomColor(walker));
  $(other.css).on("click", () => setRandomColor(other));


  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    for (let i = 0; i < walkers.length; i++) {
      let w = walkers[i];

      repositionGameItem(w);
      wallCollision(w);
      redrawGameItem(w);      
    }

    if (Math.abs(walker.position.x - other.position.x) < 50 && Math.abs(walker.position.y - other.position.y) < 50) {
      increaseBoardSize();
    }
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowUp":
        walker.speed.y = -5;
        break;
      case "ArrowDown":
        walker.speed.y = 5;
        break;
      case "ArrowLeft":
        walker.speed.x = -5;
        break;
      case "ArrowRight":
        walker.speed.x = 5;
        break;
      case "w":
        other.speed.y = -5;
        break;
      case "s":
        other.speed.y = 5;
        break;
      case "a":
        other.speed.x = -5;
        break;
      case "d":
        other.speed.x = 5;
        break;
    }
  }

  function handleKeyUp(event) {
    switch (event.key) {
      case "ArrowUp":
        walker.speed.y = 0;
        break;
      case "ArrowDown":
        walker.speed.y = 0;
        break;
      case "ArrowLeft":
        walker.speed.x = 0;
        break;
      case "ArrowRight":
        walker.speed.x = 0;
        break;
      case "w":
        other.speed.y = 0;
        break;
      case "s":
        other.speed.y = 0;
        break;
      case "a":
        other.speed.x = 0;
        break;
      case "d":
        other.speed.x = 0;
        break;

    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem(item) {
    item.position.x += item.speed.x;
    item.position.y += item.speed.y;
  }

  function redrawGameItem(item) {
    $(item.css).css("left", item.position.x);
    $(item.css).css("top", item.position.y);
  }

  function wallCollision(item) {
    if (item.position.x < 0) {
      item.position.x = 0;
    }
    if (item.position.x > WIDTH - 50) {
      item.position.x = WIDTH - 50;
    }
    if (item.position.y < 0) {
      item.position.y = 0;
    }
    if (item.position.y > HEIGHT - 50) {
      item.position.y = HEIGHT - 50;
    }
  }

  function checkIfTouching() {
    return (Math.abs(walker.position.x - other.position.x) < 50 && Math.abs(walker.position.y - other.position.y) < 50);
  }

  function increaseBoardSize() {
    if (resizing) return;
    resizing = true;
    $("#board").css("width", WIDTH + 50);
    $("#board").css("height", HEIGHT + 50);

    HEIGHT += 50;
    WIDTH += 50;

    walker.position = {
      x: 0,
      y: 0,
    };
    other.position = {
      x: WIDTH - 50,
      y: HEIGHT - 50,
    };
    resizing = false;
  }

  function setRandomColor(item) {
    console.log(item)
    // Mmmm. Regex
    let color = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });

    $(item.css).css('background-color', color);
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
