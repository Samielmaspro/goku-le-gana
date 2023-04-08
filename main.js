
Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality:90  
});
camara= document.getElementById("camara");
Webcam.attach('#camara');
function tomar_foto(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML='<img id="imagen_capturada"src="'+data_uri+'"/>';

    });
}
console.log("ml5 version: ", ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mQEBY0CYP/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelo cargado");
}
function identificar_foto(){
    img=document.getElementById("imagen_capturada");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error)
    }else{
        console.log(results);
        document.getElementById("nombre_objeto").innerHTML=results[0].label;
        document.getElementById("nombre_precision").innerHTML=results[0].confidence.toFixed(2);
    }
}