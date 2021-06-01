// console.log(JSON.parse(localStorage.getItem("produits")));


let monPanier = JSON.parse(localStorage.getItem("monPanier"));
parentM = document.querySelector("main");
for (let i=0;i<monPanier.length;i++){
parentD = document.createElement("div");
parentD.setAttribute("id","container");
parentM.appendChild(parentD);
eltImg=document.createElement("img");
eltImg.src=monPanier[i].imageUrl;
parentD.appendChild(eltImg)
}