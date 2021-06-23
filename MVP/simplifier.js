let monPanier = JSON.parse(localStorage.getItem("monPanier"));
let parentMain = document.querySelector("main");
let parentPanierInf = document.getElementById("monpanier-inf");


        for(let produit of monPanier){

        let nomProduit = produit.name
        let despProduit = produit.description
        let prixProduit = produit.price
        let quantityProduit = produit.quantity
        let colorProduit = produit.color


        // let idCarte = `carte-${i}`
        // let idInfProd =`infor-produit-${i}`
        // let idPrixProd = `price-produit-${i}`
        // let idPrixItemTotal = `pItemTotal-${i}`
        let srcImg = produit.imageUrl

        let htmlElement=`<div class="carte" >
                        <div class="image-produit">
                            <img src="${srcImg}">
                        </div>
                        <div class="info-produit">
                            <h2 class="nom-peluche">${nomProduit}</h2>
                            <p class="desp-produit">${despProduit}</p>
                            <p class="price-produit" >Price:${(prixProduit/100).toFixed(2)}&nbsp€(*${quantityProduit})</p>
                            <p class="color-produit">Color:${colorProduit}</p>
                            
                            <p class="totalprice-produit" >${quantityProduit*(prixProduit/100).toFixed(2)}&nbsp€</p>
                            <button class="btn-supprimer">Supprimer</button>
                        </div>

                    </div>`
        parentPanierInf.innerHTML+= htmlElement 
        
    }   
    sum = 0;
    for(let i=0;i<monPanier.length;i++){
        sum+=(monPanier[i].quantity)*(monPanier[i].price/100);
        btnSupprimer=document.getElementsByClassName("btn-supprimer")[i];
            btnSupprimer.addEventListener("click",function(){
                monPanier.splice(i,1);
                
                localStorage.setItem("monPanier",JSON.stringify(monPanier));
                location.reload();
                }
            )
        
        }
    document.getElementById("pricetotal") .innerHTML = "Total:&nbsp<strong>"+sum.toFixed(2)+"&nbsp€"+"</strong>";
    
          