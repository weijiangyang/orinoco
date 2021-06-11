let produitOption=JSON.parse(localStorage.getItem("optionItem"));
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

let produitSelected = new Object();
produitSelected.name = produitOption.name;
produitSelected.description = produitOption.description;
produitSelected.price = produitOption.price;
produitSelected.imageUrl=produitOption.imageUrl;
produitSelected.color = "";
produitSelected.quantity = "";
produitSelected.id=produitOption._id;


let quantitySelect = document.getElementById("quantity-select");
quantitySelect.addEventListener("input",function(){
    let quantitySelected = quantitySelect.value;
    produitSelected.quantity = quantitySelected;
    localStorage.setItem("produitSelected",JSON.stringify(produitSelected));
    }
);
produitSelected = JSON.parse(localStorage.getItem("produitSelected"));
console.log(produitSelected);
  
parentFormSelection.addEventListener("change",function(){
    let index = parentFormSelection.selectedIndex;
    let colorSelected = parentFormSelection.options[index].value;
    produitSelected.color = colorSelected;
    localStorage.setItem("produitSelected",JSON.stringify(produitSelected));
});

produitSelected=JSON.parse(localStorage.getItem("produitSelected"));
console.log(produitSelected);
let btnPanier = document.getElementById("btn-panier");
btnPanier.addEventListener("click",function(){
    let monPanier = JSON.parse(localStorage.getItem("monPanier"));
    let linkBtnPanier = document.getElementById("link-btn-panier");
    if(monPanier){
        if(produitSelected.color&&produitSelected.quantity){
        monPanier.push(produitSelected);
        p=JSON.stringify(monPanier);
        localStorage.setItem("monPanier",p);
        linkBtnPanier.href="./mon-panier.html";
        produitSelected.color = "";
        produitSelected.quantity ="";
        localStorage.setItem("produitSelected",produitSelected);
        }
        
        
    }else{
        let monPanier=[];
        if(produitSelected.color&&produitSelected.quantity){
            monPanier.push(produitSelected);
            p=JSON.stringify(monPanier);
            localStorage.setItem("monPanier",p);
            linkBtnPanier.href="./mon-panier.html";
            produitSelected.color = "";
        produitSelected.quantity ="";
        localStorage.setItem("produitSelected",produitSelected);
        
        }
    }
    
    
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