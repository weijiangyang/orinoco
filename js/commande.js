
let monCommande = JSON.parse(localStorage.getItem("monCommande"));
 
if(monCommande ==null || monCommande.length == 0){function appendElementsCommandeVide(){
      document.querySelector("h2").innerText = "Vous n'avez aucune commande en cours!";
      document.querySelector("p#infocommande").innerText = "Ajouter d'abord vos produits au votre panier et puis valider vos commandes"
      }
   appendElementsCommandeVide();
}else{function appendElementsCommandeNonVide(){
         document.getElementById("idoforder").innerText = monCommande.orderId;
         let listOfProductsCommanded = monCommande.listOfProductsCommanded;
         // calculer le prix total de la commande
         let sum = 0;
         for(let i=0; i<listOfProductsCommanded.length;i++){
         let priceItem = (listOfProductsCommanded[i].price)*(listOfProductsCommanded[i].quantity)/100;
         sum+=priceItem
         }
         document.getElementById("priceoforder").innerText = `${sum.toFixed(2)}€`;
         // retourner au page d'accueil pour recommencer 
         document.getElementById("acueill").addEventListener("click",function(){
            monCommande=[];
            localStorage.setItem("monCommande",JSON.stringify(monCommande));
         })
      }
      appendElementsCommandeNonVide();
};





