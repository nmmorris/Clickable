
/***********************************************************************************
  Clickable Modification
  by Scott Kildall 
  Modified by Natalie Morris
  
  Start your localhost before running this, otherwise no PNGs will display

  Shows an example of how to use allocation tables with the
  modified p5.clickable class. This uses a ClickableManager class to
  (1) allocate and set variables from a .csv file
  (2) draw all the clickables that are visible in a single function


***********************************************************************************/

// the manager class
var clickablesManager;

// an array of clickable objects
var clickables;

// indexes into the array (constants) - look at the clickableLayout.csv
const clMoth1 = 0;
const clMoth2 = 1;
const clPrevious = 2;
const clNext = 3;

// ALWAYS allocate the ClickableManager in the preload() function
// if you get an error here, it is likely the .csv file that is not the
// correct filename or path
function preload(){
  clickablesManager = new ClickableManager('data/clickableLayout.csv');
}

// ALWAYS call the setup() funciton for ClickableManager in the setup(), after
// the class has been allocated in the preload() function.
function setup() {
  createCanvas(windowWidth,windowHeight);

  // setup the clickables = this will allocate the array
  clickables = clickablesManager.setup();

  // call OUR function to setup additional information about the p5.clickables
  // that are not in the array 
  setupClickables(); 
}

// Just draw the button
function draw() {
  background(0);

  // draw the p5.clickables
  clickablesManager.draw();
}

// change individual fields of the clickables
function setupClickables() {
  // make same callaback handlers for all 4 clickables
  for( let i = 0; i < clickables.length; i++ ) {
    clickables[i].onPress = clickableButtonPressed;
    clickables[i].onHover = clickableButtonHover;
    clickables[i].onOutside = clickableButtonOnOutside;
  }
}

//--- CLICKABLE CALLBACK FUNCTIONS ----
clickableButtonPressed = function () {
  // check ID of each and do simple alert based on the button
  if( this.id === clMoth1 ) {
    alert( "I am a Rosy Maple Moth!");
  }

  else if( this.id === clMoth2 ) {
    alert( "I am a Polyphemus Silkmoth!");
  }

  else if( this.id === clPrevious ) {
    alert( "Me too!");
  }

  else if( this.id === clNext ) {
    alert( "So true!");
  }
}

// tint when mouse is over
clickableButtonHover = function () {
  this.color = "#F4DCBF";
  this.noTint = false;
  this.tint = "#FF0000";
}

// color a light gray if off
clickableButtonOnOutside = function () {
  // Change colors based on the id #
  this.color = "#FFFFFF";
}
