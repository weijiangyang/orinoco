
let monCommande = JSON.parse(localStorage.getItem("monCommande"));

if(monCommande ==null || monCommande.length == 0){
    document.querySelector("h2").innerText = "Vous n'avez aucune commande en cours!";
    document.querySelector("p#infocommande").innerText = "Ajouter d'abord vos produits au votre panier et puis valider vos commandes"
}else{
    let orderId = document.getElementById("idoforder");
    orderId.innerText = monCommande.orderId;
    let priceTotalCommande = document.getElementById("priceoforder");
    let listOfProductsCommanded = monCommande.listOfProductsCommanded;
    
    let sum = 0;
    for(let i=0; i<listOfProductsCommanded.length;i++){
        let priceItem = (listOfProductsCommanded[i].price)*(listOfProductsCommanded[i].quantity)/100;
        sum+=priceItem
    }
    priceTotalCommande.innerText = `${sum.toFixed(2)}€`;
    document.getElementById("acueill").addEventListener("click",function(){
        monCommande=[];
        localStorage.setItem("monCommande",JSON.stringify(monCommande));
    })
};




