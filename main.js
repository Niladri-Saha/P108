function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8GRjXM30H/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,result){
    console.log('gotResults');
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        
        document.getElementById("result_label").innerHTML="I can hear - "+result[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy - "+(result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.colour="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.colour="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img=document.getElementById("Dog.png");
        img1=document.getElementById("Cat.png");
        img2=document.getElementById("Cow.png");
        img3=document.getElementById("Lion.png");
        
        if(result[0].label=="Meowing"){
            img1.src='Cat.png';
        }
        else if(result[0].label=="Mooing"){
             img2.src='Cow.png';
        } 
        else if(result[0].label=="Barking"){
            img.src='Dog.png';
        }
        else if(result[0].label=="Roar")
        {
            img3.src='Lion.png';
        }
        else{
            img1.src='Cat.png';
            img2.src='Cow.png';
            img.src='Dog.png';
            img3.src='Lion.png';
        } 
    }
}