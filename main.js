function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("MobileNet", modelloaded);
}


function modelloaded() {
    console.log("modelloaded");
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results);
document.getElementById("result").innerHTML=results[0].label;
document.getElementById("accuracy").innerHTML==results[0].confidence.toFixed(2);

    }
}
