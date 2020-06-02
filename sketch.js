var w = 50;

var gfx = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

var out = () => "{"+gfx.toString()+"}";

function setup() {
  createCanvas(5*w, 8*w);
  background(0);
  var clr = createButton("Clear");
  clr.position(0, 9*w);
  clr.mousePressed(resetSketch);

  output = createElement("h3", out());
  output.position(5*w, 2*w);

  drawLines();

  header = createElement("h1", "5x8 graphics generator for 16x2 lcd. Just draw whatever you want and copy the cgram data below:<br>");
  header.position(5*w, 0);
}

function drawLines(){
  stroke(255);
  strokeWeight(8);
  for (i = 0; i <= 5; i++)
    line(w*i, 0, w*i, height);
  for(i = 0; i <= 8; i++)
    line(0, w*i, width, w*i);
}

function resetSketch(){
  gfx = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  clear();
  background(0);
  output.html(out());

  drawLines();
}

function draw() {

  // delete(output);
}

function mouseClicked(){
  if ((mouseX > 0 && mouseX < width) && (mouseY > 0 && mouseY < height)){
    var x = Math.ceil(mouseX/w)*w;
    var y = Math.ceil(mouseY/w)*w;
    var arrX = Math.ceil(x/w);
    var arrY = Math.ceil(y/w);

    if (gfx[arrY-1][arrX-1] == 0){
      fill(0, 255, 0);
      rect(x-w, y-w, w, w);

      gfx[arrY-1][arrX-1] = 1;

      output.html(out());
    }
    else{
      fill(0, 0, 0);
      rect(x-w, y-w, w, w);

      gfx[arrY-1][arrX-1] = 0;

      output.html(out());
    }
  }
}
