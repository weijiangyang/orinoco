let produitOption=JSON.parse(localStorage.getItem("optionItem"));
document.getElementById("title-peluche").innerHTML = produitOption.name;
document.getElementById("desp-peluche").innerHTML = produitOption.description;
document.getElementById("price-peluche").innerHTML = "Price:"+(produitOption.price/100).toFixed(2)+"€";
document.getElementById("image-peluche").src = produitOption.imageUrl;
let typesColor = produitOption.colors;
// console.log(produitOption);
let formSelection = document.getElementById("form-selection");
for (let color of typesColor){
    let eltOption = document.createElement("option");
    formSelection.appendChild(eltOption);
    eltOption.setAttribute("class","color-peluche");
    eltOption.innerHTML=color;
    eltOption.style.color = "black";
}    
let produitSelected = new Object();
produitSelected.name = produitOption.name;
produitSelected.description = produitOption.description;
produitSelected.price = produitOption.price;
produitSelected.imageUrl=produitOption.imageUrl;
produitSelected.id=produitOption._id;
let quantitySelect = document.getElementById("quantity-select");
quantitySelect.addEventListener("input",function(){
    let quantitySelected = quantitySelect.value;
    produitSelected.quantity = quantitySelected;
    localStorage.setItem("produitSelected",JSON.stringify(produitSelected));
    
});

formSelection.addEventListener("change",function(){
    let index = formSelection.selectedIndex;
    let colorSelected = formSelection.options[index].value;
    produitSelected.color = colorSelected;
    localStorage.setItem("produitSelected",JSON.stringify(produitSelected));
});
console.log(localStorage.getItem("produitSelected"));
 produitSelected = JSON.parse(localStorage.getItem("produitSelected"));
let btnPanier = document.getElementById("btn-panier");
btnPanier.addEventListener("click",function(){
    let monPanier = JSON.parse(localStorage.getItem("monPanier"));
    
    if(monPanier){
        
        
            if(produitSelected.quantity&&produitSelected.color){
                // produitSelected.quantity=quantitySelected;
                // produitSelected.color=colorSelected;
                monPanier.push(produitSelected);
                p=JSON.stringify(monPanier);
                localStorage.setItem("monPanier",p)
            }
       

    }else{
        let monPanier=[];
        if(produitSelected.color&&produitSelected.quantity){
            monPanier.push(produitSelected);
            p=JSON.stringify(monPanier)
            localStorage.setItem("monPanier",p);
        }
    }
    
    let linkBtnPanier = document.getElementById("link-btn-panier");
    let index = formSelection.selectedIndex;
    let colorSelected = formSelection.options[index].value;
    let quantitySelected = quantitySelect.value;
    if (colorSelected && quantitySelected){linkBtnPanier.href="./mon-panier.html"};
})

function menuPilier(){
    document.getElementById("menu-pilier").addEventListener(
        "click",function(){
            document.getElementById("menu-extend").style.display="block";
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
}    

menuPilier();    








