
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

        let elt = document.getElementById("btn");
        elt.addEventListener("click",function(){
        var selectColor = document.querySelector("select");
        var selectQuantity = document.getElementById("quantity-select")
        
         
        let produit ={src:value[0].imageUrl,name:value[0].name,description:value[0].description,price:value[0].price,
            color: selectColor.options[selectColor.selectedIndex].label,quantity:selectQuantity.value};
      
       
        

        let optionsProduit = JSON.parse(localStorage.getItem("produits"));

        if(optionsProduit){
    
        optionsProduit.push(produit);
        localStorage.setItem("produits",JSON.stringify(optionsProduit))
        
            
        }else{
            optionsProduit=[];
            optionsProduit.push(produit);
            localStorage.setItem("produits",JSON.stringify(optionsProduit))
            
            }
    }
)
}) 
  
    .catch(function(err){
        console.log("il y a un error")
    })
     
    
}
    
getPelucheInf();
console.log(JSON.parse(localStorage.getItem("produits")))




