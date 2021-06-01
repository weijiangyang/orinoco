let produitOption=JSON.parse(localStorage.getItem("optionItem"));
document.getElementById("title-peluche").innerHTML = produitOption.name;
document.getElementById("desp-peluche").innerHTML = produitOption.description;
document.getElementById("price-peluche").innerHTML = "Price:"+(produitOption.price/100).toFixed(2)+"€";
document.getElementById("image-peluche").src = produitOption.imageUrl;
let typesColor = produitOption.colors;
let parentP = document.getElementById("form-selection");
for (let color of typesColor){
    let eltOption = document.createElement("option");
    parentP.appendChild(eltOption);
    eltOption.setAttribute("class","color-peluche");
    eltOption.innerHTML=color;
    // eltOption.style.backgroundColor=color;
    eltOption.style.color = "black";
 }   

let produitSelected = new Object();
let colorSelect = document.getElementById("form-selection");
let quantitySelect = document.getElementById("quantity-select");
colorSelect.addEventListener,quantitySelect.addEventListener("change",function(){
    
    let index = colorSelect.selectedIndex;
    let colorSelected = colorSelect.options[index].value;
    let quantitySelected = quantitySelect.value;
    
    
        produitSelected.name = produitOption.name;
        produitSelected.description = produitOption.description;
        produitSelected.price = produitOption.price;
        produitSelected.color = colorSelected;
        produitSelected.quantity = quantitySelected;
        produitSelected.id=produitOption._id;
        
    localStorage.setItem("produitSelected",JSON.stringify(produitSelected));
       
    });
    

    let btnPanier = document.getElementById("btn-panier");
btnPanier.addEventListener("click",function(){
    
    let monPanier = JSON.parse(localStorage.getItem("monPanier"));
    
    if(monPanier){
        
        monPanier.push(produitSelected);
        p=JSON.stringify(monPanier);
        localStorage.setItem("monPanier",p)
        

    }else{
        let monPanier=[];
        monPanier.push(produitSelected);
        p=JSON.stringify(monPanier)
        localStorage.setItem("monPanier",p);
    }

})
    
   



