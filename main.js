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
    }
}

function draw() {
    background("lightyellow");
}