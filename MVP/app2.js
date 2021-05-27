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
        document.getElementById("first-firstcolor-peluche").innerHTML=value[0].colors[0];
        document.getElementById("first-secondcolor-peluche").innerHTML=value[0].colors[1];
        document.getElementById("first-thirdcolor-peluche").innerHTML=value[0].colors[2];
        document.getElementById("first-forthcolor-peluche").innerHTML=value[0].colors[3];

        // var elt= document.querySelector("button")
        // elt.addEventListener("click",function(){
            localStorage.setItem("name",value[0].name);
            localStorage.setItem("description",value[0].description);
            localStorage.setItem("price",`Price:${(value[0].price/100).toFixed(2)}€`);
            localStorage.setItem("url",value[0].imageUrl);
            
            
            
        // })

        var selectColor = document.querySelector("select");
        var selectQuantity = document.getElementById("quantity-select");
        selectColor.addEventListener("change",function(){
            localStorage.setItem("color",this.options[this.selectedIndex].label)
        })
        selectQuantity.addEventListener("change",function(){
            localStorage.setItem("quantity",this.value)
        })

       

        }
        
        
        )
        
        
        
        
    
    
   
    .catch(function(err){
        console.log("il y a un error")
    })
     
    
}
    
getPelucheInf();
console.log(localStorage.name)
let produit ={name:localStorage.name,price:localStorage.price}

let optionsProduit = JSON.parse(localStorage.getItem("produit"));

if(optionsProduit){
    var elt= document.querySelector("button")
    elt.addEventListener("click",function(){optionsProduit.push(produit)})


}else{
    optionsProduit=[];
   optionsProduit.push(produit);
   
}
console.log(optionsProduit.length)