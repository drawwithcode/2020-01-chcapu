function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  // put setup code here
  background("Moccasin");
  angleMode(DEGREES);

}

function draw() {
  // put drawing code here
  translate(width/2, height/2);

//sotto

  push();
//da rosso a blu
  translate(150, 75);
  fill(lerpColor(color("rgba(255,0,0,1)"), color("rgba(0,255,225,0)"), frameCount/360));
  noStroke();
  rotate(frameCount*20);
  scale(frameCount/360);
  ellipse(150,0,100);

  pop();

  push();
//da giallo a rosso
  translate(-150, 75);
  fill(lerpColor(color("rgba(255,255,0,1)"), color("rgba(255,0,0,0)"), frameCount/360));
  noStroke();
  rotate(frameCount*20);
  scale(frameCount/360);
  ellipse(150,0,100);

  pop();

  push();
//da blu a giallo
  translate(0, 75);
  fill(lerpColor(color("rgba(0,255,255,1)"), color("rgba(255,255,0,0)"), frameCount/360));
  noStroke();
  rotate(frameCount*20);
  scale(frameCount/360);
  ellipse(150,0,100);

  pop();

//sopra

  push();
//da rosso a giallo
  translate(150, -75);
  fill(lerpColor(color("rgba(255,0,0,1)"), color("rgba(255,255,0,0)"), frameCount/360));
  noStroke();
  rotate(frameCount*20);
  scale(frameCount/360);
  ellipse(150,0,100);

  pop();

  push();
//da giallo a blu
  translate(-150, -75);
  fill(lerpColor(color("rgba(255,255,0,1)"), color("rgba(0,255,255,0)"), frameCount/360));
  noStroke();
  rotate(frameCount*20);
  scale(frameCount/360);
  ellipse(150,0,100);

  pop();

  push();
//da blu a rosso
  translate(0, -75);
  fill(lerpColor(color("rgba(0,255,255,1)"), color("rgba(255,0,0,0)"), frameCount/360));
  noStroke();
  rotate(frameCount*20);
  scale(frameCount/360);
  ellipse(150,0,100);

  pop();

  if(frameCount == 1200){noLoop()}

}
