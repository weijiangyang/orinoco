// console.log(JSON.parse(localStorage.getItem("produits")));


let monPanier = JSON.parse(localStorage.getItem("monPanier"));
parentM = document.querySelector("main");
for (let i=0;i<monPanier.length;i++){
   

parentD = document.createElement("div");
parentD.setAttribute("class","carte");
parentM.appendChild(parentD);

eltImg=document.createElement("img");
eltImg.src=monPanier[i].imageUrl;
parentD.appendChild(eltImg);

eltT = document.createElement("div");
eltT.setAttribute("class","info-produit");
parentD.appendChild(eltT);

eltN = document.createElement("h2");
eltT.appendChild(eltN);
eltN.innerHTML= monPanier[i].name;

eltD = document.createElement("p");
eltD.setAttribute("class","desp-produit");
eltT.appendChild(eltD);
eltD.innerHTML = monPanier[i].description;

eltP = document.createElement("p");
eltP.setAttribute ("class","price-produit");
eltT.appendChild(eltP);
eltP.innerHTML = "Price:"+(monPanier[i].price/100).toFixed(2)+"€"+`(*${monPanier[i].quantity}）`;
eltC = document.createElement("p");
eltC.setAttribute("class","color-produit");
eltT.appendChild(eltC);
eltC.innerHTML = "Color:"+monPanier[i].color;

eltLabel = document.createElement("label");
eltT.appendChild(eltLabel);
eltLabel.innerHTML="Quantity: "
eltI = document.createElement("input");
eltLabel.appendChild(eltI );
eltI.setAttribute("class","quantity-pro")
eltI.setAttribute("type","number");
eltI.setAttribute("placeHolder",monPanier[i].quantity);

eltI.addEventListener("change",function(){
    monPanier[i].quantity = eltI.value;
    
    
localStorage.setItem("monPanier",JSON.stringify(monPanier));


eltP.innerHTML = "Price:"+(monPanier[i].price/100).toFixed(2)+"€"+`*${eltI.value}`;

})



btn = document.createElement("button");
eltT.appendChild(btn);
btn.innerHTML = "Supprimer";
btn.addEventListener("click",function(){
    monPanier.splice(i,i+1);
    localStorage.setItem("monPanier",JSON.stringify(monPanier));
    location.reload();
    console.log(monPanier)
})

}