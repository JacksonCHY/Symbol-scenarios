var diameter = 5;
var dataValue;
var lat; 
var long;

function setup() {
  createCanvas(600, 500);
  fill(237, 34, 93);
  
  lat = createInput("0").size(30,20);
  lat.position(120,400);
  // label #1
  latLabel = createElement('p', 'Latitude:');
  latLabel.position(lat.x-72, lat.y-12);
  
  long = createInput("0").size(30,20);
  long.position(120,430);
  // label #2
  longLabel = createElement('p', 'Longitude:');
  longLabel.position(long.x-72, long.y-12);
  
  dataValue = createInput("0").size(30,20);
  dataValue.position(120,460);
  // label #3
  dataValueLabel = createElement('p', 'Value:');
  dataValueLabel.position(dataValue.x-72, dataValue.y-12)
}

function draw() {
  var latInput = Number(lat.value(), 10);
  var longInput = Number(long.value(), 10);
  var dataValueInput = Number(dataValue.value(), 10)
  var x = longInput + 180;
  var y = 90 - latInput;

  background(220);
  
	if (-90<= latInput && latInput <= 90 && -180<= longInput && longInput <=180){  

    if (x-50 <= mouseX && mouseX <= x+50 && y-50<= mouseY && mouseY <= y+50){
    ellipse (mouseX, mouseY, diameter, diameter);
//line
    stroke(2)
    line(mouseX, mouseY, x, y);
    
  } else {
// Symbol #1
    if (0<=dataValueInput && dataValueInput<=100) {
    fill(0);
    noStroke();
    ellipse(x, y, diameter, diameter);

    }
  // Symbol #2
    else if (100<dataValueInput && dataValueInput<=200) {
    fill(0);
    noStroke();
    ellipse(x, y, diameter*2, diameter*2);

    }
  // Symbol #3
    else if (200<dataValueInput) {
    fill(0);
    noStroke();
    ellipse(x, y, diameter*3, diameter*3);

  // Symbol #4
    } else { 
    textSize(100);
    fill(255, 0, 0);
    text ("X", width/2, height/2);
    textAlign (CENTER, CENTER);
  	}
  }
  }
}