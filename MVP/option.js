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
    
    eltOption.style.color = "black";
 }   

let produitSelected = new Object();

let quantitySelect = document.getElementById("quantity-select");

parentP.addEventListener,quantitySelect.addEventListener("change",function(){
    
    let index = parentP.selectedIndex;
    let colorSelected = parentP.options[index].value;
    let quantitySelected = quantitySelect.value;
    
    
        produitSelected.name = produitOption.name;
        produitSelected.description = produitOption.description;
        produitSelected.price = produitOption.price;
        produitSelected.imageUrl=produitOption.imageUrl;
        produitSelected.color = colorSelected;
        produitSelected.quantity = quantitySelected;
        produitSelected.id=produitOption._id;
        
    localStorage.setItem("produitSelected",JSON.stringify(produitSelected));
       
    });
    

    let btnPanier = document.getElementById("btn-panier");
btnPanier.addEventListener("click",function(){
    
    let monPanier = JSON.parse(localStorage.getItem("monPanier"));
    
    if(monPanier){
        if(produitSelected){
            if(produitSelected.color&&produitSelected.quantity){
        monPanier.push(produitSelected);
        p=JSON.stringify(monPanier);
        localStorage.setItem("monPanier",p)}}
        

    }else{
        let monPanier=[];
        monPanier.push(produitSelected);
        p=JSON.stringify(monPanier)
        localStorage.setItem("monPanier",p);
    }
    
    let A = document.getElementById("link-btn-panier");
   
        
    let index = parentP.selectedIndex;
    let colorSelected = parentP.options[index].value;
    let quantitySelected = quantitySelect.value;
    if (colorSelected && quantitySelected){A.href="./mon-panier.html"};


    

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




