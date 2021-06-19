
let monPanier = JSON.parse(localStorage.getItem("monPanier"));
let parentMain = document.querySelector("main");
let parentPanierInf = document.getElementById("monpanier-inf");
if(monPanier==null|| monPanier.length==0){
    // afficher le contenu du page quand mon panier est vide
    function appendElementsPanierVide(){
        eltForm = document.querySelector("div#formvalidation");
        parentMain.removeChild(eltForm);
        eltMonpanier = document.querySelector("div.monpanier");
        document.querySelector("div.monpanier").innerHTML = "";
        eltVide = document.createElement("div");
        eltVide.setAttribute("class","vide");
        parentMain.appendChild(eltVide);
        eltVide.innerHTML = "Votre panier est vide pour le moment!";
        linkCommencerChoisir = document.createElement("a");
        linkCommencerChoisir.setAttribute("id","commencechoisir");
        parentMain.appendChild(linkCommencerChoisir);
        linkCommencerChoisir.innerHTML = "Choisissez vos produits ";
        linkCommencerChoisir.href = "index.html";
        eltAjouter = document.createElement("div");
        eltAjouter.setAttribute("id","ajouter");
        parentMain.appendChild(eltAjouter);
        eltAjouter.innerHTML = "Ajouter vos produits au panier pour le moment!";
        eltValider = document.createElement("div");
        eltValider.setAttribute("id","valider");
        parentMain.appendChild(eltValider);
        eltValider.innerHTML = "Ensuit vous pourrez valider votre panier Merci!";
    }
    appendElementsPanierVide();
}else{
    // afficher le contenu du page quand mon panier n'est pas vide
    let sum = 0;
        // ajouter les elements dynamiquement sur le page en itinérant les items dans mon panier
    function appendElementsPanierNonVide(){
        for (let i=0;i<monPanier.length;i++){
            parentCarte = document.createElement("div");
            parentCarte.setAttribute("class","carte");
            parentCarte.setAttribute("id",`carte-${i}`)
            parentPanierInf.appendChild(parentCarte);
            eltImage = document.createElement("div");
            eltImage.setAttribute("class","image-produit");
            parentCarte.appendChild(eltImage);
            eltImg=document.createElement("img");
            eltImg.src=monPanier[i].imageUrl;
            eltImage.appendChild(eltImg);
            eltInfProduit = document.createElement("div");
            eltInfProduit.setAttribute("class","info-produit");
            eltInfProduit.setAttribute("id",`infor-produit-${i}`)
            parentCarte.appendChild(eltInfProduit);
            eltNom = document.createElement("h2");
            eltNom.setAttribute("class","nom-peluche")
            eltInfProduit.appendChild(eltNom);
            eltNom.innerHTML= monPanier[i].name;
            eltDespProduit = document.createElement("p");
            eltDespProduit.setAttribute("class","desp-produit");
            eltInfProduit.appendChild(eltDespProduit);
            eltDespProduit.innerHTML = monPanier[i].description;
            eltPriceProduit = document.createElement("p");
            eltPriceProduit.setAttribute ("class","price-produit");
            eltPriceProduit.setAttribute("id",`price-produit-${i}`);
            eltInfProduit.appendChild(eltPriceProduit);
            eltPriceProduit.innerHTML = "Price:"+(monPanier[i].price/100).toFixed(2)+"&nbsp€"+`(*${monPanier[i].quantity}）`;
            eltColorProduit = document.createElement("p");
            eltColorProduit.setAttribute("class","color-produit");
            eltInfProduit.appendChild(eltColorProduit);
            eltColorProduit.innerHTML = "Color:"+monPanier[i].color;
            eltLabelQuantity= document.createElement("label");
            eltLabelQuantity.setAttribute("class","labelQuantity");
            eltInfProduit.appendChild(eltLabelQuantity);
            eltLabelQuantity.innerHTML="Quantity: "
            eltInputQuantity = document.createElement("input");
            eltInputQuantity.setAttribute("class","quantity-inp");
            eltLabelQuantity.appendChild(eltInputQuantity);
            eltInputQuantity.setAttribute("type","number");
            eltInputQuantity.setAttribute("value",monPanier[i].quantity);
            eltInputQuantity.setAttribute("min",1);
            priceItemTotal = document.createElement("p");
            priceItemTotal.setAttribute("id",`pItemTotal-${i}`);
            priceItemTotal.setAttribute("class","totalprice-produit");
            eltInfProduit.appendChild(priceItemTotal);
            priceItemTotal.innerHTML = ((monPanier[i].quantity)*(monPanier[i].price/100)).toFixed(2)+"&nbsp€";
            sum+=(monPanier[i].quantity)*(monPanier[i].price/100);
            // ajouter le button pour supprimer les produits choisies
            btnSupprimer = document.createElement("button");
            eltInfProduit.appendChild(btnSupprimer);
            btnSupprimer.innerHTML = "Supprimer";
            btnSupprimer.setAttribute("id","btn-supprimer");
            btnSupprimer.addEventListener("click",function(){
                monPanier.splice(i,1);
                
                localStorage.setItem("monPanier",JSON.stringify(monPanier));
                location.reload();
                }
            )
            // changer la quantity des produits dans mon panier
            const inputQuantity = eltInputQuantity;
            inputQuantity.addEventListener("change",function(){
                monPanier[i].quantity = this.value;
                localStorage.setItem("monPanier",JSON.stringify(monPanier));
                eltP = document.getElementById(`price-produit-${i}`);
                eltP.innerHTML = "Price:"+(monPanier[i].price/100).toFixed(2)+"&nbsp€"+`(*${monPanier[i].quantity}）`;
                pItemTotal = document.getElementById(`pItemTotal-${i}`);
                pItemTotal.innerHTML = ((monPanier[i].quantity)*(monPanier[i].price/100)).toFixed(2)+"&nbsp€";
                sum = 0;
                for(let i=0;i<monPanier.length;i++){
                    sum+=(monPanier[i].quantity)*(monPanier[i].price/100);
                    }
                location.reload();
                }
            ) 
            
        }        
    }        
    appendElementsPanierNonVide();
    // ajouter l'element du price total pour tous les produits dans mon panier sur le page 
    priceTotal = document.createElement("p");
    priceTotal.setAttribute("id","pricetotal")
    parentMonpanier = document.querySelector("div.monpanier");
    parentMonpanier.appendChild(priceTotal);
    priceTotal.innerHTML = "Total:&nbsp<strong>"+sum.toFixed(2)+"&nbsp€"+"</strong>";
    // ajouter le button pour retourner au page d'accueille et continuer le shopping
    eltLienContinuer = document.createElement("a");
    eltLienContinuer.setAttribute("class","lien-continuer");
    eltLienContinuer.setAttribute("href","index.html");
    
    parentMonpanier.appendChild(eltLienContinuer);
    eltBtnContinue = document.createElement("div");
    eltBtnContinue.setAttribute("Id","btn-continuer");
    eltLienContinuer.appendChild(eltBtnContinue);
    eltBtnContinue.innerHTML = "Continuer mon shopping";
    // ajouter le formulaire de validation
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
            return true;}else{
            small.innerHTML = "Email non valide";
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
            }else{
                small.innerHTML = "Adresse non valide doit contenir aux moins deux lettres";
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
            }else{
                small.innerHTML = "Code postale non valide doit contenir 5 chiffres ";
                small.classList.remove("text-success");
                small.classList.add("text-danger");
                return false;
                }
        }
    // composer et send mes commandes
    function commandeSend(){
        if (validEmail(form.email) && validAdresse(form.adresse) && validCodePostale(form.codepostale)
            &&(form.nom.value)&&(form.prenom.value)&&(form.city.value)){
                
                
                
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
                for (let i=0;i<monPanier.length;i++){
                    formPurchaseOrder.products.push(monPanier[i].id)
                }
                
                
         async function apiSdend()   {fetch("http://localhost:3000/api/teddies/order",{
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
                        listOfProductsCommanded : monPanier,
                        orderId : formPurchaseOrder.orderId
                    }
                    localStorage.setItem("monCommande",JSON.stringify(monCommande));
                    monPanier=[];
                    localStorage.setItem("monPanier",JSON.stringify(monPanier));
                    
                    }
                );
            }
                
                
        
         async function changePage(){
             const Result =  await apiSdend();
            console.log(Result);
            
          document.getElementById("btn-link").href="commandeSuccess.html";        
             }
         
        changePage();
         
                 
    }};  
       
   const commandeSendCliquer =  document.getElementById("btn-commande");
   commandeSendCliquer.addEventListener("click",commandeSend) ;    
            
}               
 
    
                
                  
                

                
            
             
        
          
        
            
            
        
     


             
