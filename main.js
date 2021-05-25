Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    camera=document.getElementById("camera");
    Webcam.attach("#camera");
    function takesnap(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
    
    
    
    
    
    }
    console.log('ml5 version',ml5.version);
    var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HmTAw4hlL/model.json', modelloaded);
    function modelloaded(){
    console.log("model loaded");
    
    }
    
    
    function check(){
    img = document.getElementById("capture_image");
    classifier.classify(img,gotResult);
    }
    
    function gotResult(error,result){
    if(error){
    console.error(error);
    
        }
    else{
    console.log(result);
    document.getElementById("result_person_name").innerHTML=result[0].label;
    document.getElementById("result_person_accuracy").innerHTML=result[0].confidence.toFixed(3);
    
    }
    
    
     
    
    }

    function modelloaded(){
    console.log("modelloaded")


    }