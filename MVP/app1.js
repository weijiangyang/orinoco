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

        document.querySelector("div.first-peluche h2#firstitle").innerHTML = value[0].name;
        document.querySelector("div.first-peluche p#firstdesp").innerHTML = value[0].description;
        document.querySelector("div.first-peluche p#firstprice").innerHTML = `PRICE:${value[0].price}€`;

        document.querySelector("div.second-peluche h2#secondtitle").innerHTML = value[1].name;
        document.querySelector("div.second-peluche p#seconddesp").innerHTML = value[1].description;
        document.querySelector("div.second-peluche p#secondprice").innerHTML = `PRICE:${value[1].price}€`;

        document.querySelector("div.third-peluche h2#thirdtitle").innerHTML = value[2].name;
        document.querySelector("div.third-peluche p#thirddesp").innerHTML = value[2].description;
        document.querySelector("div.third-peluche p#thirdprice").innerHTML = `PRICE:${value[2].price}€`;

        document.querySelector("div.forth-peluche h2#forthtitle").innerHTML = value[3].name;
        document.querySelector("div.forth-peluche p#forthdesp").innerHTML = value[3].description;
        document.querySelector("div.forth-peluche p#forthprice").innerHTML = `PRICE:${value[3].price}€`;

        document.querySelector("div.forth-peluche h2#forthtitle").innerHTML = value[3].name;
        document.querySelector("div.forth-peluche p#forthdesp").innerHTML = value[3].description;
        document.querySelector("div.forth-peluche p#forthprice").innerHTML = `PRICE:${value[3].price}€`;

        

        
        
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
        console.log(value)
        
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
        console.log(value)
        
    })
    .catch(function(err){
        console.log("il y un error")
    })}
getFurnitureInf();
        
        
    
    

