
let monCommande = JSON.parse(localStorage.getItem("monCommande"));
// alert(JSON.stringify(monCommande));
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
};
function menuPillier(){
    document.getElementById("menu-pilier").addEventListener( "click",function(){
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
        
menuPillier();   



