function preload(){

}

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(700, 400);

    video = createCapture(VIDEO);
    video.hide();
    

}

function draw(){

   image(video,130, 130, 250, 250);

   fill("yellow");
   stroke("green");
   rect(130, 130, 250, 20);
   rect(110, 135, 20, 250);
   rect(380, 135, 20, 250)
   circle(110,135, 50);
   circle(400, 135, 50);
   rect(130, 380, 250, 20);
   circle(400, 390, 50);
   circle(120, 390, 50);
   

    
}


function take_snapshot(){
    save("picture");
}