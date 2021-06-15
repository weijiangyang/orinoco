
let monPanier = JSON.parse(localStorage.getItem("monPanier"));
parentMain = document.querySelector("main");
parentPanierInf = document.getElementById("monpanier-inf");
function eltAppendPanierVide(){
    eltForm = document.querySelector("div#formvalidation");
    parentMain.removeChild(eltForm);
    eltMonpanier = document.querySelector("div.monpanier");
    document.querySelector("div.monpanier").innerHTML = "";
    eltVide = document.createElement("div");
    eltVide.setAttribute("class","vide");
    parentMain.appendChild(eltVide);
    eltVide.innerHTML = "Votre panier est vide pour le moment!";
    eltBtnChoisir = document.createElement("a");
    eltBtnChoisir.setAttribute("id","commencechoisir");
    parentMain.appendChild(eltBtnChoisir);
    eltBtnChoisir.innerHTML = "Choisissez vos produits ";
    eltBtnChoisir.href = "index.html";
    eltAjouter = document.createElement("div");
    eltAjouter.setAttribute("id","ajouter");
    parentMain.appendChild(eltAjouter);
    eltAjouter.innerHTML = "Ajouter vos produits au panier pour le moment!";
    eltValider = document.createElement("div");
    eltValider.setAttribute("id","valider");
    parentMain.appendChild(eltValider);
    eltValider.innerHTML = "Ensuit vous pourrez valider votre panier Merci!";
}

function eltAppendPanierNonVide(){

}

if(monPanier==null|| monPanier.length==0){
    eltAppendPanierVide();
}else{
    let sum = 0;
    for (let i=0;i<monPanier.length;i++){
        function parentCarte(i){
            parentCarte = document.createElement("div");
            parentCarte.setAttribute("class","carte");
            parentCarte.setAttribute("id",`carte-${i}`)
            parentPanierInf.appendChild(parentCarte);
            return parentCarte
        }
        parentCarte(i);
        console.log(parentCarte);
        function appendImage(parentCarte){
            eltImage = document.createElement("div");
            eltImage.setAttribute("class","image-produit");
            parentCarte(i).appendChild(eltImage); 
            return eltImage 
        }
        console.log(appendImage(parentCarte))
        // appendImage(i);
        // console.log(appendImage)
        // appendImage(i);
        // function appendImg(i){
        //     eltImg=document.createElement("img");
        //     eltImg.src=monPanier[i].imageUrl;
        //     appendImage(i).appendChild(eltImg);
        //     return eltImg
        // }
        // appendImg(i);
        // function appendInfProduit(i){
        //     eltInfProduit = document.createElement("div");
        //     eltInfProduit.setAttribute("class","info-produit");
        //     parentCarte(i).appendChild(eltInfProduit);
        //     return eltInfProduit
        // }
        // appendInfProduit(i);
        // function appendNom(i){
        //     eltNom = document.createElement("h2");
        //     eltNom.setAttribute("id","nom-peluche")
        //     appendInfProduit(i).appendChild(eltNom);
        //     eltNom.innerHTML= monPanier[i].name;
        //     return eltNom
        // }
        // appendNom(i);
        // function appendDesp(i){
        //     eltDesp = document.createElement("p");
        //     eltDesp.setAttribute("class","desp-produit");
        //     eltDesp.setAttribute("id",`desp-produit-${i}`);
        //     appendInfProduit(i).appendChild(eltDesp);
        //     eltDesp.innerHTML = monPanier[i].description;
        //     return eltDesp
        // }
        // appendDesp(i);
        // function appendPriceItem(i){
        //     eltPriceItem = document.createElement("p");
        //     eltPriceItem.setAttribute ("class","price-produit");
        //     eltPriceItem.setAttribute("id",`price-produit-${i}`);
        //     appendInfProduit(i).appendChild(eltPriceItem);
        //     eltPriceItem.innerHTML = "Price:"+(monPanier[i].price/100).toFixed(2)+"&nbsp€"+`(*${monPanier[i].quantity}）`;
        //     return eltPriceItem
        // }
        // appendPriceItem(i);
        // function appendColorItem(i){
        //     eltColorItem = document.createElement("p");
        //     eltColorItem.setAttribute("class","color-produit");
        //     eltColorItem.setAttribute("id",`color-produit-${i}`)
        //     appendInfProduit(i).appendChild(eltColorItem);
        //     eltColorItem.innerHTML = "Color:"+monPanier[i].color;
        //     return eltColorItem
        // }
        // appendColorItem(i);
        // function appendBtnQuantity(i){
        //     eltBtnChoisirLabel = document.createElement("label");
        //     eltBtnChoisirLabel.setAttribute("id",`label-${i}`);
        //     appendInfProduit(i).appendChild(eltBtnChoisirLabel);
        //     eltBtnChoisirLabel.innerHTML="Quantity: "
        //     eltInputQuantity = document.createElement("input");
        //     eltInputQuantity.setAttribute("class","quantity-inp");
        //     eltBtnChoisirLabel.appendChild(eltInputQuantity);
        //     eltInputQuantity.setAttribute("type","number");
        //     eltInputQuantity.setAttribute("value",monPanier[i].quantity);
        //     eltInputQuantity.setAttribute("min",1);
        //     return eltInputQuantity
        // }
        
        // appendBtnQuantity(i).addEventListener("change",function(i){
        //     monPanier[i].quantity = this.value;
        //     localStorage.setItem("monPanier",JSON.stringify(monPanier));
        //     document.getElementById(`price-produit-${i}`).innerHTML = "Price:"+(monPanier[i].price/100).toFixed(2)+"&nbsp€"+`(*${monPanier[i].quantity}）`;
        //     document.getElementById(`pItemTotal-${i}`).innerHTML = ((monPanier[i].quantity)*(monPanier[i].price/100)).toFixed(2)+"&nbsp€";
        //     monPanier = JSON.parse(localStorage.getItem("monPanier"));
        //     location.reload();
        // });    
        
        // function appendPriceItemTotal(i){
        //     priceItemTotal = document.createElement("p");
        //     priceItemTotal.setAttribute("id",`pItemTotal-${i}`);
        //     priceItemTotal.setAttribute("class","totalprice-produit");
        //     appendInfProduit(i).appendChild(priceItemTotal);
        //     priceItemTotal.innerHTML = ((monPanier[i].quantity)*(monPanier[i].price/100)).toFixed(2)+"&nbsp€";
        //     return priceItemTotal
        // }
        // appendPriceItemTotal(i);
        // function appendBtnSupprimer(i){
        //     btnSupprimer = document.createElement("button");
        //     appendInfProduit(i).appendChild(btnSupprimer);
        //     btnSupprimer.innerHTML = "Supprimer";
        //     btnSupprimer.setAttribute("id",`btn-supprimer-${i}`);
        //     return btnSupprimer
        // }
        // appendBtnSupprimer(i);
        // sum+=(monPanier[i].quantity)*(monPanier[i].price/100);
        
        // appendBtnSupprimer(i).addEventListener("click",function(i){
        //     monPanier.splice(i,i+1);
        //     localStorage.setItem("monPanier",JSON.stringify(monPanier));
        //     location.reload();
        //     }
        // )
    }
    function priceTotal(){
        priceTotal = document.createElement("p");
        priceTotal.setAttribute("id","pricetotal");
        document.querySelector("div.monpanier").appendChild(priceTotal);
        priceTotal.innerHTML = "Total:&nbsp<strong>"+sum.toFixed(2)+"&nbsp€"+"</strong>";
    }
    priceTotal();
    
    btnChoisir();
    function btnChoisir(){
        eltBtnChoisirienContinuer = document.createElement("a");
        eltBtnChoisirienContinuer.setAttribute("id","lien-continuer");
        eltBtnChoisirienContinuer.setAttribute("href","index.html");
        document.querySelector("div.monpanier").appendChild(eltBtnChoisirienContinuer);

        eltBtnContinue = document.createElement("div");
        eltBtnContinue.setAttribute("id","btn-continuer");
        eltBtnChoisirienContinuer.appendChild(eltBtnContinue);
        eltBtnContinue.innerHTML = "Continuer mon shopping";
    }
        
    let form = document.getElementById("loginForm");
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
          
    document.getElementById("btn-commande").addEventListener("click",function(){
        if (validEmail(form.email) && validAdresse(form.adresse) && validCodePostale(form.codepostale)
            &&(form.nom.value)&&(form.prenom.value)&&(form.city.value)){
                document.getElementById("btn-link").href="commandeSuccess.html";
                let contact=new Object();
                let formPurchaseOrder = new Object();
                contact.firstName = form.nom.value;
                contact.lastName = form.prenom.value;
                contact.email = form.email.value;
                contact.address = form.adresse.value;
                contact.city = form.city.value;
                formPurchaseOrder = {contact,products:[]
                }
               
                    
      
               
        
            for (let i=0;i<monPanier.length;i++){
                formPurchaseOrder.products.push(monPanier[i].id)
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
    
            .then(function(order) {
              
            let monCommande = new Object();
            monCommande.listOfProductsCommanded = monPanier;
            monCommande.contact = order.contact;
            monCommande.orderId = order.orderId;
              

            
            localStorage.setItem("monCommande",JSON.stringify(monCommande));
            
                
                localStorage.removeItem("monPanier");
               
                
                
                

                }
            );  
            
        };
            }
            
        )
    } 


             
