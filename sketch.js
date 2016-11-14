// // Loading a sound, that interacts with the back ground color:

// var sound;

// function preload() {
//   popsound= loadSound('pop.mp3')
// }

// function setup() {
//   createCanvas(400,400);
//   background(random(255), random(255),random(255))

// }

// function draw() {



//   // text of instrustions CLICK TO PLAY SOUND
//   textAlign(CENTER);
//   fill(100);
//   noStroke();
//   text("Click if your moms hot", width/2, height/2);
// }

// function mousePressed()
// {
//   // trigger the sound
//   popsound.play();

//   // change backgrounf color
//   background(random(255), random(255),random(255))
// }





// // LOOPING SOUND, COMBINED WITH A VISUAL MEASUREMENT GRAPHIC and PLAY/STOP BUTTONS
// var soundtrack;
// var playbutton, stopbutton;
// var analyzer;

// function preload() 
// {
//   soundtrack = loadSound('soundtrack.mp3');
// }

// function setup() 
// {
//   createCanvas(400, 400);

//   // loop sound
//   soundtrack.loop();

//   // stop sound to prevent it from playing automatically
//   soundtrack.stop();

//   // play button
//   playbutton = createButton('Play');
//   playbutton.position(25, 25);
//   playbutton.mousePressed(playsound);

//   // stop button
//   stopbutton = createButton('Stop');
//   stopbutton.position(75, 25);
//   stopbutton.mousePressed(stopsound);

//   // music visualizer
//   analyzer = new p5.Amplitude();
//   analyzer.setInput(soundtrack);

// }

// function draw() {
//   background (255);

//   // draws an ellipse whose based on current volume level
//   var volume = analyzer.getLevel();
//   ellipse(width/2, height/2, map(volume,0,1,0,width), map(volume, 0,1,0, height));





// The MAP Function pratice

var col;

function setup() {
  createCanvas(600, 400);
}

  function draw() {
    col = map(mouseX, 0, 600, 0, 255);
    
    background(col);

    fill(250, 118, 222)
    ellipse(mouseX, 200, 46, 64);
  }
