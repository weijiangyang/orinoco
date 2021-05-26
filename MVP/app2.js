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
        document.getElementById("first-title-peluche").innerHTML= 'hot'
    })
    .catch(function(err){
        console.log("il y a un error")
    })
     
    
}
    
getPelucheInf();