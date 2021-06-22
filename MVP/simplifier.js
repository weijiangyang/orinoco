let monPanier = JSON.parse(localStorage.getItem("monPanier"));
let parentMain = document.querySelector("main");
let parentPanierInf = document.getElementById("monpanier-inf");

for(let i=0; i<5;i++)
let produitOfPanier = monPanier[i]
let nomProduit = `${produitOfPanier.name}`
let despProduit = `${produitOfPanier.description}`
let prixProduit = `${produitOfPanier.price}`
let quantityProduit = `${produitOfPanier.quantity}`
let prixProduitText = "Price:"+(prixProduit/100).toFixed(2)+"&nbsp€"+`(*${quantityProduit})`

let idCarte = `carte-${i}`
let idInfProd =`infor-produit-${i}`
let idPrixProd = `price-produit-${i}`
let htmlElement = `<div class="carte" id="idCarte">
let srcImg = produitOfPanier.imageUrl
<div class="image-produit">
<img src="srcImg">
</div>
<div class="info-produit" id="idInfProd">
<h2 class="nom-peluche">nomProduit</h2>
<p class="desp-produit">despProduit</p>
<p class="price-produit" id="idPrixProd"></p>
</div>
</div>`
parentPanierInf.innerHTML+= htmlElement 