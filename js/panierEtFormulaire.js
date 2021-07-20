let lePanier = JSON.parse(localStorage.getItem("lePanier"));
let elementMain = document.querySelector("main");
let elementPanierInf = document.getElementById("monpanier-inf");
/**  quand le panier est vide
**/
function appendElementsPanierVide(){
    elementMain.removeChild(document.querySelector("div#formvalidation"));
    document.querySelector("div.monpanier-no-vide").style.display="none"
}
/**quand le panier n'est pas vide
 * afficher l'indication sur la page 
 **/
function appendElementsPanierNonVide(){
    document.querySelector("div.monpanier-vide").style.display="none"
    // ajouter les elements HTML pour chaque produit dans mon panier
    for(let produit of lePanier){
        let nomProduit = produit.name
        let despProduit = produit.description
        let prixProduit = produit.price
        let quantityProduit = produit.quantity
        let colorProduit = produit.color
        let srcImg = produit.imageUrl
        let htmlElement=
            `<div class="carte" >
                <div class="image-produit">
                    <img src="${srcImg}">
                </div>
                <div class="info-produit">
                    <h2 class="nom-peluche">${nomProduit}</h2>
                    <p class="desp-produit">${despProduit}</p>
                    <p class="price-produit" >Price:${(prixProduit/100).toFixed(2)}&nbsp€(*${quantityProduit})</p>
                    <p class="color-produit">Color:${colorProduit}</p>
                    <form for="quantity-select" id='quantity'>
                        Quantity:
                        <input type="number" class='quantity-select' min="1">
                    </form>      
                    <p class="totalprice-produit" >${quantityProduit*(prixProduit/100).toFixed(2)}&nbsp€</p>
                    <button class="btn-supprimer">Supprimer</button>
                </div>
            </div>`
        elementPanierInf.innerHTML+= htmlElement;
        
        
    } 
    // calculer le prix total et donner la function au button supprimer 
    sum = 0;
    for(let i=0;i<lePanier.length;i++){
        document.getElementsByClassName("quantity-select")[i].value = lePanier[i].quantity;
        let prixProduit = lePanier[i].price;
        let quantityProduit = lePanier[i].quantity;
        document.getElementsByClassName("quantity-select")[i].addEventListener("input",function(){
            quantityProduit = this.value;
            document.getElementsByClassName("price-produit")[i].innerHTML = `Price:${(prixProduit/100).toFixed(2)}&nbsp€(*${quantityProduit})`;
            document.getElementsByClassName("totalprice-produit")[i].innerHTML = `${quantityProduit*(prixProduit/100).toFixed(2)}&nbsp€`;
            lePanier[i].quantity = this.value;
            localStorage.setItem("lePanier",JSON.stringify(lePanier));
            lePanier = JSON.parse(localStorage.getItem("lePanier"));
            sum=0;
            for(let i=0;i<lePanier.length;i++){
                sum+=(lePanier[i].quantity)*(lePanier[i].price/100);
            }
            document.getElementById("pricetotal") .innerHTML = "Total:&nbsp<strong>"+sum.toFixed(2)+"&nbsp€"+"</strong>";
        }) 
      
        sum+=(lePanier[i].quantity)*(lePanier[i].price/100);
        // ajouter le button supprimer pour chaque produit dans mon panier
        btnSupprimer=document.getElementsByClassName("btn-supprimer")[i];
            btnSupprimer.addEventListener("click",function(){
                lePanier.splice(i,1);
                localStorage.setItem("lePanier",JSON.stringify(lePanier));
                location.reload();
            })    
    }            
     // ajouter le prix total
    document.getElementById("pricetotal") .innerHTML = "Total:&nbsp<strong>"+sum.toFixed(2)+"&nbsp€"+"</strong>";
}
/**valider le formulaire et faire le commande
 * composer la commande
 * envoyer au serveur et récupérer les information sur la commande
 **/
function commandeSend(){
    // la validation pour le formulaire
    let form = document.getElementById("loginForm");
        // la validation pour l'email
    form.email.addEventListener("change",function(){
        validEmail(this);
        }
    )
    const validEmail = function(inputEmail){
        let emailRegExp = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$','g');
        let small = inputEmail.nextElementSibling;
        if(emailRegExp.test(inputEmail.value)){
            small.innerHTML = "Email valide";
            small.classList.remove("text-danger");
            small.classList.add("text-success");
            return true;
        }else{small.innerHTML = "Email non valide";
            small.classList.remove("text-success");
            small.classList.add("text-danger");
            return false;
        }
    }    
        // la validation pour l'adresse
    form.adresse.addEventListener("change",function(){
        validAdresse(this);
        }
    )
    const validAdresse = function(inputAdresse){
        let adresseRegExp = new RegExp('[a-zA-Z]{2,}','g');
        let small = inputAdresse.nextElementSibling;
        if(adresseRegExp.test(inputAdresse.value)){
            small.innerHTML = "Adresse valide";
            small.classList.remove("text-danger");
            small.classList.add("text-success");
            return true;
        }else{small.innerHTML = "Adresse non valide doit contenir aux moins deux lettres";
            small.classList.remove("text-success");
            small.classList.add("text-danger");
            return false
        }
    }
        // la validation pour la code postale     
    form.codepostale.addEventListener("change",function(){
        validCodePostale(this);
        }
    )
    const validCodePostale = function(inputCodePostale){
        let codePostaleRegExp = new RegExp('^\\d{5}$','g');
        let small = inputCodePostale.nextElementSibling;
        if(codePostaleRegExp.test(inputCodePostale.value)){
            small.innerHTML = "Code postale valide";
            small.classList.remove("text-danger");
            small.classList.add("text-success");
            return true;
        }else{small.innerHTML = "Code postale non valide doit contenir 5 chiffres ";
            small.classList.remove("text-success");
            small.classList.add("text-danger");
            return false;
        }
    }
    // la validation pour le nom 
    form.nom.addEventListener("change",function(){
        validNom(this);
        })
    const validNom = function(inputNom){
        let small = inputNom.nextElementSibling;
        if(form.nom.value){
            small.innerHTML = "nom valide";
            small.classList.remove("text-danger");
            small.classList.add("text-success");
            return true;
        }else{small.innerHTML = "veuillez renseigner votre nom";
            small.classList.remove("text-success");
            small.classList.add("text-danger");
            return false;
        }
    }
    // la validation pour le prenom
    form.prenom.addEventListener("change",function(){
        validPrenom(this);
        })
    const validPrenom = function(inputPrenom){
        let small = inputPrenom.nextElementSibling;
        if(form.prenom.value){
            small.innerHTML = "prenom valide";
            small.classList.remove("text-danger");
            small.classList.add("text-success");
            return true;
        }else{small.innerHTML = "veuillez renseigner votre prenom";
            small.classList.remove("text-success");
            small.classList.add("text-danger");
            return false;
        }
    }
    // la validation pour la ville
    form.city.addEventListener("change",function(){
        validCity(this);
        })
    const validCity = function(inputCity){
        let small = inputCity.nextElementSibling;
        if(form.city.value){
            small.innerHTML = "ville valide";
            small.classList.remove("text-danger");
            small.classList.add("text-success");
            return true;
        }else{small.innerHTML = "veuillez renseigner votre ville";
            small.classList.remove("text-success");
            small.classList.add("text-danger");
            return false;
        }
    }
    
    // composer et send mes commandes
    if (validEmail(form.email) 
        && validAdresse(form.adresse) 
        && validCodePostale(form.codepostale)
        &&validNom(form.nom)
        &&validPrenom(form.prenom)
        &&validCity(form.city)){
            let contact = {
                firstName:form.nom.value,
                lastName:form.prenom.value,
                email:form.email.value,
                address:form.adresse.value,
                city:form.city.value
            }
            let formPurchaseOrder = {
                contact:contact,
                products:[]
            }
            for (let i=0;i<lePanier.length;i++){
                formPurchaseOrder.products.push(lePanier[i].id)
            }
            fetch("http://localhost:3000/api/teddies/order",{
                
                method: "POST",
                headers: { 
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json' 
                },
                body:JSON.stringify(formPurchaseOrder)
                }
            )
            .then(function(res) {
                if (res.ok) { 
                    return res.json(); 
                    }
                }
            )
            .then(function(formPurchaseOrder) {
                let monCommande = {
                    listOfProductsCommanded : lePanier,
                    orderId : formPurchaseOrder.orderId
                }
                localStorage.setItem("monCommande",JSON.stringify(monCommande));
                lePanier=[];
                localStorage.setItem("lePanier",JSON.stringify(lePanier));
                window.location.href  = "../html/commandeSuccess.html" ;
            })
            .catch(function(err){
                console.log("il y a un error")
            }); 
           
        }               
}
   
if(lePanier==null|| lePanier.length==0){
    appendElementsPanierVide();
}else{appendElementsPanierNonVide();
     document.getElementById("btn-commande").addEventListener("click",commandeSend); 
}