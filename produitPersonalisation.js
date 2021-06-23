let produitOption=JSON.parse(localStorage.getItem("optionItem"));
// ajouter la produit choisie sur la page 
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
        eltOption.style.color = color;
    }   
}
produitOptionAppend();
// personaliser la produit choisie en choisissant la couleur et la quantity
let produitPersonaliser = {
name : produitOption.name,
description : produitOption.description,
price : produitOption.price,
imageUrl:produitOption.imageUrl,
id:produitOption._id,}
let inputQuantity = document.getElementById("quantity-select");
inputQuantity.addEventListener("input",function(){
    produitPersonaliser.quantity = document.getElementById("quantity-select").value;
    }
)
let inputColor = document.getElementById("form-selection");
inputColor.addEventListener("change",function(){
    let index = document.getElementById("form-selection").selectedIndex;
    let colorSelected = document.getElementById("form-selection").options[index].value;
    produitPersonaliser.color = colorSelected;
    }
)
// mettre les produits choisies et personalisées dans mon panier en cliquant le button
let misePanier = document.getElementById("btn-panier").addEventListener("click",function(){
    if(produitPersonaliser.color&&produitPersonaliser.quantity){
        let lePanier = JSON.parse(localStorage.getItem("lePanier"));
        if(lePanier){
            lePanier.push(produitPersonaliser);
            localStorage.setItem("lePanier",JSON.stringify(lePanier));
            }else{
            let lePanier=[];
            lePanier.push(produitPersonaliser);
            localStorage.setItem("lePanier",JSON.stringify(lePanier));
        }
       document.getElementById("link-btn-panier").href="./mon-panier.html";
    }
    document.getElementById("quantity-select").value="";
    let index = document.getElementById("form-selection").selectedIndex;
    document.getElementById("form-selection").options[index].value = "";  
    }
)   



         



 


