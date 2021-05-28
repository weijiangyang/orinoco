// console.log(JSON.parse(localStorage.getItem("produits")));

let produits=JSON.parse(localStorage.getItem("produits"));
for ( let produit of produits){


console.log(produit.color)
// const elt= document.createElement("div");

let eltP = document.createElement("div");
let parentD = document.getElementById("container");
parentD.appendChild(eltP);
let eltPimg = document.createElement("img");
eltP.appendChild(eltPimg);
eltPimg.src = produit.src;
eltPimg.setAttribute("width","20%");
let eltPname = document.createElement("h3");
eltP.appendChild(eltPname);
eltPname.innerText = produit.name;
 let eltPdesp = document.createElement("p");
 eltPdesp.setAttribute("id","description")
 eltP.appendChild(eltPdesp);
 eltPdesp.innerHTML = produit.description ;


}











