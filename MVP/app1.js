function getPelucheInf(){
    fetch("http://localhost:3000/api/teddies")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(value){
        
        document.querySelector("div.first-peluche #first").src = value[0].imageUrl;

        document.querySelector("div#peluche #second").src = value[1].imageUrl;

        document.querySelector("div#peluche #third").src = value[2].imageUrl;
        document.querySelector("div#peluche #forth").src = value[3].imageUrl;
        document.querySelector("div#peluche #fifth").src = value[4].imageUrl;

        document.querySelector("div.first-peluche h3#firstitle").innerHTML = value[0].name;
        document.querySelector("div.first-peluche p#firstdesp").innerHTML = value[0].description;
        document.querySelector("div.first-peluche p#firstprice").innerHTML = `Price:${(value[0].price/100).toFixed(2)}€`;

        document.querySelector("div.second-peluche h3#secondtitle").innerHTML = value[1].name;
        document.querySelector("div.second-peluche p#seconddesp").innerHTML = value[1].description;
        document.querySelector("div.second-peluche p#secondprice").innerHTML = `Price:${(value[1].price/100).toFixed(2)}€`;

        document.querySelector("div.third-peluche h3#thirdtitle").innerHTML = value[2].name;
        document.querySelector("div.third-peluche p#thirddesp").innerHTML = value[2].description;
        document.querySelector("div.third-peluche p#thirdprice").innerHTML = `Price:${(value[2].price/100).toFixed(2)}€`;

        document.querySelector("div.forth-peluche h3#forthtitle").innerHTML = value[3].name;
        document.querySelector("div.forth-peluche p#forthdesp").innerHTML = value[3].description;
        document.querySelector("div.forth-peluche p#forthprice").innerHTML = `Price:${(value[3].price/100).toFixed(2)}€`;

        document.querySelector("div.fifth-peluche h3#fifthtitle").innerHTML = value[4].name;
        document.querySelector("div.fifth-peluche p#fifthdesp").innerHTML = value[4].description;
        document.querySelector("div.fifth-peluche p#fifthprice").innerHTML = `Price:${(value[4].price/100).toFixed(2)}€`;

    
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
        document.querySelector("div#camera #first").src = value[0].imageUrl;

        document.querySelector("div#camera #second").src = value[1].imageUrl;

        document.querySelector("div#camera #third").src = value[2].imageUrl;
        document.querySelector("div#camera #forth").src = value[3].imageUrl;
        document.querySelector("div#camera #fifth").src = value[4].imageUrl;

        document.querySelector("div.first-camera #first").src = value[0].imageUrl;

        document.querySelector("div#camera #second").src = value[1].imageUrl;

        document.querySelector("div#camera #third").src = value[2].imageUrl;
        document.querySelector("div#camera #forth").src = value[3].imageUrl;
        document.querySelector("div#camera #fifth").src = value[4].imageUrl;

        document.querySelector("div.first-camera h3#firstitle").innerHTML = value[0].name;
        document.querySelector("div.first-camera p#firstdesp").innerHTML = value[0].description;
        document.querySelector("div.first-camera p#firstprice").innerHTML = `Price:${(value[0].price/100).toFixed(2)}€`;

        document.querySelector("div.second-camera h3#secondtitle").innerHTML = value[1].name;
        document.querySelector("div.second-camera p#seconddesp").innerHTML = value[1].description;
        document.querySelector("div.second-camera p#secondprice").innerHTML = `Price:${(value[1].price/100).toFixed(2)}€`;

        document.querySelector("div.third-camera h3#thirdtitle").innerHTML = value[2].name;
        document.querySelector("div.third-camera p#thirddesp").innerHTML = value[2].description;
        document.querySelector("div.third-camera p#thirdprice").innerHTML = `Price:${(value[2].price/100).toFixed(2)}€`;

        document.querySelector("div.forth-camera h3#forthtitle").innerHTML = value[3].name;
        document.querySelector("div.forth-camera p#forthdesp").innerHTML = value[3].description;
        document.querySelector("div.forth-camera p#forthprice").innerHTML = `Price:${(value[3].price/100).toFixed(2)}€`;

        document.querySelector("div.fifth-camera h3#fifthtitle").innerHTML = value[4].name;
        document.querySelector("div.fifth-camera p#fifthdesp").innerHTML = value[4].description;
        document.querySelector("div.fifth-camera p#fifthprice").innerHTML = `Price:${(value[4].price/100).toFixed(2)}€`;
        
        
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

        document.querySelector("div.first-furniture h3#firstitle").innerHTML = value[0].name;
        document.querySelector("div.first-furniture p#firstdesp").innerHTML = value[0].description;
        document.querySelector("div.first-furniture p#firstprice").innerHTML = `Price:${(value[0].price/100).toFixed(2)}€`;

        document.querySelector("div.second-furniture h3#secondtitle").innerHTML = value[1].name;
        document.querySelector("div.second-furniture p#seconddesp").innerHTML = value[1].description;
        document.querySelector("div.second-furniture p#secondprice").innerHTML = `Price:${(value[1].price/100).toFixed(2)}€`;

        document.querySelector("div.third-furniture h3#thirdtitle").innerHTML = value[2].name;
        document.querySelector("div.third-furniture p#thirddesp").innerHTML = value[2].description;
        document.querySelector("div.third-furniture p#thirdprice").innerHTML = `Price:${(value[2].price/100).toFixed(2)}€`;

        document.querySelector("div.forth-furniture h3#forthtitle").innerHTML = value[3].name;
        document.querySelector("div.forth-furniture p#forthdesp").innerHTML = value[3].description;
        document.querySelector("div.forth-furniture p#forthprice").innerHTML = `Price:${(value[3].price/100).toFixed(2)}€`;

        document.querySelector("div.fifth-furniture h3#fifthtitle").innerHTML = value[4].name;
        document.querySelector("div.fifth-furniture p#fifthdesp").innerHTML = value[4].description;
        document.querySelector("div.fifth-furniture p#fifthprice").innerHTML = `Price:${(value[4].price/100).toFixed(2)}€`;
        
        
    })
    .catch(function(err){
        console.log("il y un error")
    })}
getFurnitureInf();
        
        
    
    

