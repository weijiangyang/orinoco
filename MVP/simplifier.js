let lePanier = JSON.parse(localStorage.getItem("monPanier"));
let elementMain = document.querySelector("main");
let parentPanierInf = document.getElementById("monpanier-inf");

function appendElementsPanierVide(){
    elementMain.removeChild(document.querySelector("div#formvalidation"));
    document.querySelector("div.monpanier-no-vide").style.display="none"
}

function appendElementsPanierNonVide(){
    document.querySelector("div.monpanier-vide").style.display="none"
        for(let produit of lePanier){

        let nomProduit = produit.name
        let despProduit = produit.description
        let prixProduit = produit.price
        let quantityProduit = produit.quantity
        let colorProduit = produit.color
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
    for(let i=0;i<lePanier.length;i++){
        sum+=(lePanier[i].quantity)*(lePanier[i].price/100);
        btnSupprimer=document.getElementsByClassName("btn-supprimer")[i];
            btnSupprimer.addEventListener("click",function(){
                lePanier.splice(i,1);
                
                localStorage.setItem("monPanier",JSON.stringify(lePanier));
                location.reload();
                }
            )
        
        }
    document.getElementById("pricetotal") .innerHTML = "Total:&nbsp<strong>"+sum.toFixed(2)+"&nbsp€"+"</strong>";
    
    } 
    if(lePanier==null|| lePanier.length==0){
        appendElementsPanierVide();
    }else{
        appendElementsPanierNonVide();
    }