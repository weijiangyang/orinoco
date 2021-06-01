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
eltP.innerHTML = monPanier[i].price;

eltC = document.createElement("p");
eltC.setAttribute("class","color-produit");
eltT.appendChild(eltC);
eltC.innerHTML = monPanier[i].color;


}