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
// mettre les produits choisies et personalisées dans mon panier en cliquant le button
document.getElementById("btn-panier").addEventListener("click",function(){
    if(produitPersonaliser.color&&produitPersonaliser.quantity){
        document.getElementById("link-btn-panier").href="./mon-panier.html";
        let monPanier = JSON.parse(localStorage.getItem("monPanier"));
    
        if(monPanier){
            monPanier.push(produitPersonaliser);
            localStorage.setItem("monPanier",JSON.stringify(monPanier));
            
        }else{
            let monPanier=[];
            monPanier.push(produitPersonaliser);
            localStorage.setItem("monPanier",JSON.stringify(monPanier));
        }
    }
// rafraîchir la page
    document.getElementById("quantity-select").value="";
    let index = document.getElementById("form-selection").selectedIndex;
    document.getElementById("form-selection").options[index].value = "";      
})   



         



 


