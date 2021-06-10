var noseX = 0,
    noseY = 0,
    rightWristX = 0,
    leftWristX = 0,
    differance = 0

function setup() {
    cam = createCapture(VIDEO);
    cam.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 100);
    posnet = ml5.poseNet(cam, modelLoaded)
    posnet.on('pose', gotPose)
}

function modelLoaded() {
    console.log("posnet is started")
}

function gotPose(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        differance=floor(leftWristX-rightWristX);

    }
}

function draw() {
    background("lightyellow");
    fill('lightred');
    stroke('red');
    square(noseX,noseY,differance);
    document.getElementById('sites').innerHTML="Width and height of the square will be "+differance;
    fill('#FFE5B4');
    textSize(differance)
    text("Be Happy!😀",noseX,noseY,differance);
}