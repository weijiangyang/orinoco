console.log('name');
function getPelucheInf(){
    fetch("http://localhost:3000/api/teddies")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(value){
        
        document.getElementById("first-image-peluche").src = value[0].imageUrl;
        document.getElementById("first-title-peluche").innerHTML=value[0].name;
        document.getElementById("first-desp-peluche").innerHTML = value[0].description;
        document.getElementById("first-price-peluche").innerHTML = `Price:${(value[0].price/100).toFixed(2)}€`;
    })
    .catch(function(err){
        console.log("il y a un error")
    })
     
    
}
    
getPelucheInf();