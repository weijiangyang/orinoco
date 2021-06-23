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
                            <label class="labelQuantity">Quantity:
                                <input class="quantity-inp" type="number" value="${quantityProduit}" min="1">
                            </label>
                            <p class="totalprice-produit" >${quantityProduit*(prixProduit/100).toFixed(2)}&nbsp€</p>
                        </div>
                    </div>`
        parentPanierInf.innerHTML+= htmlElement 
        document.querySelector("input").addEventListener("change",function(){
        quantityProduit = this.value;
        localStorage.setItem("monPanier",JSON.stringify(monPanier));
        eltP = document.querySelector("p.price-produit")
                    eltP.innerHTML = "Price:"+`${(prixProduit/100).toFixed(2)}`+"&nbsp€"+`(*${quantityProduit}）`;
                    pItemTotal = document.querySelector("p.totalprice-produit");
                    pItemTotal.innerHTML = `${(quantityProduit*(prixProduit/100)).toFixed(2)}`+"&nbsp€";
                    // document.getElementById(`${idPrixProd}`).innerHTML = "50";
                    sum = 0;
                    for(let i=0;i<monPanier.length;i++){
                        sum+=(quantityProduit)*(prixProduit/100)
                        }
                    
                    }
                ) 
            }