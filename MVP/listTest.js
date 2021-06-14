let produitOption=JSON.parse(localStorage.getItem("optionItem"));
function produitOptionAppend (){
    
    document.getElementById("title-peluche").innerHTML = produitOption.name;
    document.getElementById("desp-peluche").innerHTML = produitOption.description;
    document.getElementById("price-peluche").innerHTML = "Price:"+(produitOption.price/100).toFixed(2)+"€";
    document.getElementById("image-peluche").src = produitOption.imageUrl;
    let typesColor = produitOption.colors;
    let parentFormSelection = document.getElementById("form-selection");
    for (let color of typesColor){
        let eltOption = document.createElement("option");
        parentFormSelection.appendChild(eltOption);
        eltOption.setAttribute("class","color-peluche");
        eltOption.innerHTML=color;
        eltOption.style.color = "black";
    }   
}
produitOptionAppend();
let produitPersonaliser = {
name : produitOption.name,
description : produitOption.description,
price : produitOption.price,
imageUrl:produitOption.imageUrl,
id:produitOption._id
}
document.getElementById("quantity-select").addEventListener("input",function(){
    produitPersonaliser.quantity = this.value;
    }
);    

document.getElementById("form-selection").addEventListener("change",function(){
    let index = this.selectedIndex;
    let colorSelected = this.options[index].value;
    produitPersonaliser.color = colorSelected;
    }
);    
document.getElementById("btn-panier").addEventListener("click",function(){
    let monPanier = JSON.parse(localStorage.getItem("monPanier"));
    if(monPanier){
        if(produitPersonaliser.color&&produitPersonaliser.quantity){
            document.getElementById("link-btn-panier").href="./mon-panier.html";
            monPanier.push(produitPersonaliser);
            p=JSON.stringify(monPanier);
            localStorage.setItem("monPanier",p);
            }
    }else{
        let monPanier=[];
        if(produitPersonaliser.color&&produitPersonaliser.quantity){
            document.getElementById("link-btn-panier").href="./mon-panier.html";
            monPanier.push(produitPersonaliser);
            p=JSON.stringify(monPanier);
            localStorage.setItem("monPanier",p);
        }    
    }        
            
document.getElementById("quantity-select").value="";
let index = parentFormSelection.selectedIndex;
document.getElementById("form-selection").options[index].value = "";   


// localStorage.setItem("produitPersonaliser",produitPersonaliser);
})          



 

document.getElementById("menu-pilier").addEventListener(
    "click",function(){
        // document.getElementById("menubar").style.display="none";
        document.getElementById("menu-extend").style.display="block";
        // document.getElementById("second-bar").style.display="none";
        document.getElementById("third-bar").style.transformOrigin="left";
        document.getElementById("first-bar").style.transformOrigin="left";
        document.getElementById("first-bar").style.transform="rotateZ(28deg)";
        document.getElementById("third-bar").style.transform="rotateZ(-28deg)";
        document.getElementById("third-bar").style.transition=".2s";
        document.getElementById("first-bar").style.transition=".2s";
        
        document.getElementById("second-bar").style.display="none";
        
        document.getElementById("first-bar").style.transition="left";
        }
)        
    
