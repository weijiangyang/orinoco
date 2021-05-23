function getPelucheInf(){
    fetch("http://localhost:3000/api/teddies")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(value){
        
        document.querySelector("div#peluche #first").src = value[0].imageUrl;

        document.querySelector("div#peluche #second").src = value[1].imageUrl;

        document.querySelector("div#peluche #third").src = value[2].imageUrl;
        document.querySelector("div#peluche #forth").src = value[3].imageUrl;
        document.querySelector("div#peluche #fifth").src = value[4].imageUrl;
        console.log(value[0]._id);
        
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
        
        
    
    

