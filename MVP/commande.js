let orderId = document.getElementById("idoforder");
let monCommande = JSON.parse(localStorage.getItem("monCommande"));
orderId.innerText = monCommande.orderId;
let priceTotalCommande = document.getElementById("priceoforder");
let sum = 0;
for(let i=0; i<monCommande.length;i++){

}
priceTotalCommande.innerText = mon