Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

        console.log('ml5 version',ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kNXa1PUnd/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediciton is " + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results)
        if(gesture == "amazing")
        {
            document.getElementById("result").innerHTML = "&#128076;";
        }
        else if(gesture == "best")
        {
            document.getElementById("result").innerHTML = "&#128077;";
        }
        else if(gesture == "victory")
        {
            document.getElementById("result").innerHTML = "&#9996;";
        }
    }
}
