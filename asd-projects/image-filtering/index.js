// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  // applyFilter(reddify);
  // applyFilterNoBackground(decreaseBlue);
  // applyFilterNoBackground(increaseGreenByBlue);

  blurSmudge();
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filter) {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      let rgbString = image[i][j];

      let rgbNumbers = rgbStringToArray(rgbString);

      filter(rgbNumbers);

      image[i][j] = rgbArrayToString(rgbNumbers);
    }
  }
}


// TODO 7: Create the applyFilterNoBackground function

function applyFilterNoBackground(filter) {
  let backgroundColor = image[0][0];
  
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      let rgbString = image[i][j];

      if (backgroundColor == rgbString)
        continue;
      
      let rgbNumbers = rgbStringToArray(rgbString);

      filter(rgbNumbers);

      image[i][j] = rgbArrayToString(rgbNumbers);
    }
  }
}


// TODO 5: Create the keepInBounds function
function keepInBounds(num) {
  return num > 255 ? 255 
       : num < 0 ? 0 
       : num;
}

// TODO 3: Create reddify function

function reddify(arr) {
  arr[RED] = 200;
}


// TODO 6: Create more filter functions
function decreaseBlue(arr) {
  arr[BLUE] = keepInBounds(arr[BLUE] - 50);
}

function increaseGreenByBlue(arr) {
  arr[GREEN] = keepInBounds(arr[GREEN] + arr[BLUE]);
}

// CHALLENGE code goes below here
function blurSmudge() {
  let original = [...image];

  for (let i = 0; i < original.length; i++) {
    for (let j = 0; j < original[i].length; j++) {
      let currentPoint = original[i][j];
      
      let nearPoints = [currentPoint];

      if (i > 0) {
        nearPoints.push(original[i - 1][j]);

        if (j > 0) {
          nearPoints.push(original[i - 1][j - 1]);
        }

        if (j < original[i].length - 2) {
          nearPoints.push(original[i - 1][j + 1]);
        }
     
      }

      if (i < original.length - 1) {
        nearPoints.push(original[i + 1][j])

        if (j > 0) {
          nearPoints.push(original[i + 1][j - 1]);
        }

        if (j < original[i].length - 1) {
          nearPoints.push(original[i + 1][j + 1]);
        }
      }

      if (j > 0) {
        nearPoints.push(original[i][j - 1]);
      }

      if (j < original[i].length - 1) {
        nearPoints.push(original[i][j + 1]);
      }
      
      let average = averageColors(nearPoints);

      image[i][j] = average;

     
    }
  }
}

function averageColors(arr) {
  let a = arr.map(rgbStringToArray);

  let redSum = 0;
  let blueSum = 0;
  let greenSum = 0;

  for (let i = 0; i < a.length; i++) {
    redSum += a[i][RED];
    blueSum += a[i][BLUE];
    greenSum += a[i][GREEN];
  }

  redSum /= a.length;
  blueSum /= a.length;
  greenSum /= a.length;

  let rgbArray = [];
  rgbArray[RED] = redSum;
  rgbArray[BLUE] = blueSum;
  rgbArray[GREEN] = greenSum;

  return rgbArrayToString(rgbArray);
}
