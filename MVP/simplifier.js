let monPanier = JSON.parse(localStorage.getItem("monPanier"));
let parentMain = document.querySelector("main");
let parentPanierInf = document.getElementById("monpanier-inf");

        for(let i=0; i<monPanier.length;i++){

        let nomProduit = monPanier[i].name
        let despProduit = monPanier[i].description
        let prixProduit = monPanier[i].price
        let quantityProduit = monPanier[i].quantity
        let colorProduit = monPanier[i].color


        let idCarte = `carte-${i}`
        let idInfProd =`infor-produit-${i}`
        let idPrixProd = `price-produit-${i}`
        let idPrixItemTotal = `pItemTotal-${i}`
        let srcImg = monPanier[i].imageUrl

        let htmlElement=`<div class="carte" id="${idCarte}">
                        <div class="image-produit">
                            <img src="${srcImg}">
                        </div>
                        <div class="info-produit" id="${idInfProd}">
                            <h2 class="nom-peluche">"${nomProduit}"</h2>
                            <p class="desp-produit">"${despProduit}"</p>
                            <p class="price-produit" id="${idPrixProd}">Price:${(prixProduit/100).toFixed(2)}&nbsp€(*${quantityProduit})</p>
                            <p class="color-produit">Color:${colorProduit}</p>
                            <label class="labelQuantity">Quantity:
                                <input class="quantity-inp" type="number" value="${quantityProduit}" min="1">
                            </label>
                            <p class="totalprice-produit" id="pItemTotal-${i}">${quantityProduit*(prixProduit/100).toFixed(2)}&nbsp€</p>
                        </div>
                    </div>`
        parentPanierInf.innerHTML+= htmlElement 
        document.querySelector("input.quantity-inp").addEventListener("change",function(){
        quantityProduit = this.value;
        localStorage.setItem("monPanier",JSON.stringify(monPanier));
        eltP = document.getElementById(`pItemTotal-${i}`);
                    eltP.innerHTML = "Price:"+"${(quantityProduit/100).toFixed(2)}"+"&nbsp€"+`(*${quantityProduit}）`;
                    pItemTotal = document.getElementById(`pItemTotal-${i}`);
                    pItemTotal.innerHTML = (quantityProduit*(prixProduit/100)).toFixed(2)+"&nbsp€";
                    document.getElementById(`${idPrixProd}`).innerHTML = "Price:"+`${(prixProduit/100).toFixed(2)}`+"&nbsp€"+`(*${quantityProduit})`;
                    sum = 0;
                    for(let i=0;i<monPanier.length;i++){
                        sum+=(quantityProduit)*(prixProduit/100);
                        }
                    
                    }
                ) }