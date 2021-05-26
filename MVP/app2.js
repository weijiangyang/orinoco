function getPelucheInf(){
    fetch("http://localhost:3000/api/teddies")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(value){
        
        document.getElementById("first-image-peluche").src = value[0].imageUrl;

        document.getElementById("second-image-peluche").src = value[1].imageUrl;

        document.getElementById("third-image-peluche").src = value[2].imageUrl;
        document.getElementById("forth-image-peluche").src = value[3].imageUrl;
        document.getElementById("fifth-image-peluche").src = value[4].imageUrl;

        document.getElementById("first-title-peluche").innerHTML = value[0].name;
        document.getElementById("first-desp-peluche").innerHTML = value[0].description;
        document.getElementById("first-price-peluche").innerHTML = `Price:${(value[0].price/100).toFixed(2)}€`;

        document.getElementById("second-title-peluche").innerHTML = value[1].name;
        document.getElementById("second-desp-peluche").innerHTML = value[1].description;
        document.getElementById("second-price-peluche").innerHTML = `Price:${(value[1].price/100).toFixed(2)}€`;

        document.getElementById("third-title-peluche").innerHTML = value[2].name;
        document.getElementById("third-desp-peluche").innerHTML = value[2].description;
        document.getElementById("third-price-peluche").innerHTML = `Price:${(value[2].price/100).toFixed(2)}€`;

        document.getElementById("forth-title-peluche").innerHTML = value[3].name;
        document.getElementById("forth-desp-peluche").innerHTML = value[3].description;
        document.getElementById("forth-price-peluche").innerHTML = `Price:${(value[3].price/100).toFixed(2)}€`;

        document.getElementById("fifth-title-peluche").innerHTML = value[4].name;
        document.getElementById("fifth-desp-peluche").innerHTML = value[4].description;
        document.getElementById("fifth-price-peluche").innerHTML = `Price:${(value[4].price/100).toFixed(2)}€`;

    
    })
    .catch(function(err){
        console.log("il y a un error")
    })
     
    
}
    
getPelucheInf();