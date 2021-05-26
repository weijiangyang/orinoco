function getPelucheInf(){
    fetch("http://localhost:3000/api/teddies")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(value){
        
        document.querySelector("div.first-peluche #first-image-peluche").src = value[0].imageUrl;

        document.querySelector("div#peluche #second-image-peluche").src = value[1].imageUrl;

        document.querySelector("div#peluche #third-image-peluche").src = value[2].imageUrl;
        document.querySelector("div#peluche #forth-image-peluche").src = value[3].imageUrl;
        document.querySelector("div#peluche #fifth-image-peluche").src = value[4].imageUrl;

        document.querySelector("div.first-peluche h3#first-title-peluche").innerHTML = value[0].name;
        document.querySelector("div.first-peluche p#first-desp-peluche").innerHTML = value[0].description;
        document.querySelector("div.first-peluche p#first-price-peluche").innerHTML = `Price:${(value[0].price/100).toFixed(2)}€`;

        document.querySelector("div.second-peluche h3#second-title-peluche").innerHTML = value[1].name;
        document.querySelector("div.second-peluche p#second-desp-peluche").innerHTML = value[1].description;
        document.querySelector("div.second-peluche p#second-price-peluche").innerHTML = `Price:${(value[1].price/100).toFixed(2)}€`;

        document.querySelector("div.third-peluche h3#third-title-peluche").innerHTML = value[2].name;
        document.querySelector("div.third-peluche p#third-desp-peluche").innerHTML = value[2].description;
        document.querySelector("div.third-peluche p#third-price-peluche").innerHTML = `Price:${(value[2].price/100).toFixed(2)}€`;

        document.querySelector("div.forth-peluche h3#forth-title-peluche").innerHTML = value[3].name;
        document.querySelector("div.forth-peluche p#forth-desp-peluche").innerHTML = value[3].description;
        document.querySelector("div.forth-peluche p#forth-price-peluche").innerHTML = `Price:${(value[3].price/100).toFixed(2)}€`;

        document.querySelector("div.fifth-peluche h3#fifth-title-peluche").innerHTML = value[4].name;
        document.querySelector("div.fifth-peluche p#fifth-desp-peluche").innerHTML = value[4].description;
        document.querySelector("div.fifth-peluche p#fifth-price-peluche").innerHTML = `Price:${(value[4].price/100).toFixed(2)}€`;

    
    })
    .catch(function(err){
        console.log("il y a un error")
    })
     
    
}
    
getPelucheInf();

function getCameraInf(){
    fetch("http://localhost:3000/api/cameras")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(value){
        document.querySelector("div#camera #first-image-camera").src = value[0].imageUrl;

        document.querySelector("div#camera #second-image-camera").src = value[1].imageUrl;

        document.querySelector("div#camera #third-image-camera").src = value[2].imageUrl;
        document.querySelector("div#camera #forth-image-camera").src = value[3].imageUrl;
        document.querySelector("div#camera #fifth-image-camera").src = value[4].imageUrl;

       

        document.querySelector("div.first-camera h3#first-title-camera").innerHTML = value[0].name;
        document.querySelector("div.first-camera p#first-desp-camera").innerHTML = value[0].description;
        document.querySelector("div.first-camera p#first-price-camera").innerHTML = `Price:${(value[0].price/100).toFixed(2)}€`;

        document.querySelector("div.second-camera h3#second-title-camera").innerHTML = value[1].name;
        document.querySelector("div.second-camera p#second-desp-camera").innerHTML = value[1].description;
        document.querySelector("div.second-camera p#second-price-camera").innerHTML = `Price:${(value[1].price/100).toFixed(2)}€`;

        document.querySelector("div.third-camera h3#third-title-camera").innerHTML = value[2].name;
        document.querySelector("div.third-camera p#third-desp-camera").innerHTML = value[2].description;
        document.querySelector("div.third-camera p#thirdprice").innerHTML = `Price:${(value[2].price/100).toFixed(2)}€`;

        document.querySelector("div.forth-camera h3#forth-title-camera").innerHTML = value[3].name;
        document.querySelector("div.forth-camera p#forth-desp-camera").innerHTML = value[3].description;
        document.querySelector("div.forth-camera p#forth-price-camera").innerHTML = `Price:${(value[3].price/100).toFixed(2)}€`;

        document.querySelector("div.fifth-camera h3#fifth-title-camera").innerHTML = value[4].name;
        document.querySelector("div.fifth-camera p#fifth-desp-camera").innerHTML = value[4].description;
        document.querySelector("div.fifth-camera p#fifth-price-camera").innerHTML = `Price:${(value[4].price/100).toFixed(2)}€`;
        
        
    })
    .catch(function(err){
        console.log("il y un error")
    })}
getCameraInf();

function getFurnitureInf(){
    fetch("http://localhost:3000/api/furniture")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(value){
        document.querySelector("div#furniture #first").src = value[0].imageUrl;

        document.querySelector("div#furniture #second").src = value[1].imageUrl;

        document.querySelector("div#furniture #third").src = value[2].imageUrl;
        document.querySelector("div#furniture #forth").src = value[3].imageUrl;
        document.querySelector("div#furniture #fifth").src = value[4].imageUrl;

        document.querySelector("div.first-furniture h3#first-title-furniture").innerHTML = value[0].name;
        document.querySelector("div.first-furniture p#first-desp-furniture").innerHTML = value[0].description;
        document.querySelector("div.first-furniture p#first-price-furniture").innerHTML = `Price:${(value[0].price/100).toFixed(2)}€`;

        document.querySelector("div.second-furniture h3#second-title-furniture").innerHTML = value[1].name;
        document.querySelector("div.second-furniture p#second-desp-furniture").innerHTML = value[1].description;
        document.querySelector("div.second-furniture p#second-price-furniture").innerHTML = `Price:${(value[1].price/100).toFixed(2)}€`;

        document.querySelector("div.third-furniture h3#third-title-furniture").innerHTML = value[2].name;
        document.querySelector("div.third-furniture p#third-desp-furniture").innerHTML = value[2].description;
        document.querySelector("div.third-furniture p#third-price-furniture").innerHTML = `Price:${(value[2].price/100).toFixed(2)}€`;

        document.querySelector("div.forth-furniture h3#forth-title-furniture").innerHTML = value[3].name;
        document.querySelector("div.forth-furniture p#forth-desp-furniture").innerHTML = value[3].description;
        document.querySelector("div.forth-furniture p#forth-price-furniture").innerHTML = `Price:${(value[3].price/100).toFixed(2)}€`;

        document.querySelector("div.fifth-furniture h3#fifth-title-furniture").innerHTML = value[4].name;
        document.querySelector("div.fifth-furniture p#fifth-desp-furniture").innerHTML = value[4].description;
        document.querySelector("div.fifth-furniture p#fifth-price-furniture").innerHTML = `Price:${(value[4].price/100).toFixed(2)}€`;
        
        
    })
    .catch(function(err){
        console.log("il y un error")
    })}
getFurnitureInf();
        
        
    
    

