
let monPanier = JSON.parse(localStorage.getItem("monPanier"));


let parentMain = document.querySelector("main");
let parentPanierInf = document.getElementById("monpanier-inf");
function appendEltPanierVide(){
    eltForm = document.querySelector("div#formvalidation");
    parentMain.removeChild(eltForm);
    eltMonpanier = document.querySelector("div.monpanier");
    document.querySelector("div.monpanier").innerHTML = "";
    eltVide = document.createElement("div");
    eltVide.setAttribute("class","vide");
    parentMain.appendChild(eltVide);
    eltVide.innerHTML = "Votre panier est vide pour le moment!";
    eltL = document.createElement("a");
    eltL.setAttribute("id","commencechoisir");
    parentMain.appendChild(eltL);
    eltL.innerHTML = "Choisissez vos produits ";
    eltL.href = "index.html";
    eltAjouter = document.createElement("div");
    eltAjouter.setAttribute("id","ajouter");
    parentMain.appendChild(eltAjouter);
    eltAjouter.innerHTML = "Ajouter vos produits au panier pour le moment!";
    eltValider = document.createElement("div");
    eltValider.setAttribute("id","valider");
    parentMain.appendChild(eltValider);
    eltValider.innerHTML = "Ensuit vous pourrez valider votre panier Merci!";
}
function appendEltPanierNonVide(){
    
    let sum = 0;
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
        eltT = document.createElement("div");
        eltT.setAttribute("class","info-produit");
        eltT.setAttribute("id",`infor-produit-${i}`)
        parentCarte.appendChild(eltT);
        eltN = document.createElement("h2");
        eltN.setAttribute("id","nom-peluche")
        eltT.appendChild(eltN);
        eltN.innerHTML= monPanier[i].name;
        eltD = document.createElement("p");
        eltD.setAttribute("class","desp-produit");
        eltD.setAttribute("id",`desp-produit-${i}`);
        eltT.appendChild(eltD);
        eltD.innerHTML = monPanier[i].description;
        eltP = document.createElement("p");
        eltP.setAttribute ("class","price-produit");
        eltP.setAttribute("id",`price-produit-${i}`);
        eltT.appendChild(eltP);
        eltP.innerHTML = "Price:"+(monPanier[i].price/100).toFixed(2)+"&nbsp€"+`(*${monPanier[i].quantity}）`;
        eltC = document.createElement("p");
        eltC.setAttribute("class","color-produit");
        eltC.setAttribute("id",`color-produit-${i}`)
        eltT.appendChild(eltC);
        eltC.innerHTML = "Color:"+monPanier[i].color;
        eltLabel = document.createElement("label");
        eltLabel.setAttribute("id",`label-${i}`);
        eltT.appendChild(eltLabel);
        eltLabel.innerHTML="Quantity: "
        eltI = document.createElement("input");
        eltI.setAttribute("class","quantity-inp");
        eltLabel.appendChild(eltI);
        eltI.setAttribute("type","number");
        eltI.setAttribute("value",monPanier[i].quantity);
        eltI.setAttribute("min",1);
        pItemTotal = document.createElement("p");
        pItemTotal.setAttribute("id",`pItemTotal-${i}`);
        pItemTotal.setAttribute("class","totalprice-produit");
        eltT.appendChild(pItemTotal);
        pItemTotal.innerHTML = ((monPanier[i].quantity)*(monPanier[i].price/100)).toFixed(2)+"&nbsp€";
        sum+=(monPanier[i].quantity)*(monPanier[i].price/100);
        btn = document.createElement("button");
        eltT.appendChild(btn);
        btn.innerHTML = "Supprimer";
        btn.setAttribute("id","btn-supprimer");
        btn.addEventListener("click",function(){
            monPanier.splice(i,i+1);
            localStorage.setItem("monPanier",JSON.stringify(monPanier));
            location.reload();
            }
        )
    }
        priceTotal = document.createElement("p");
        priceTotal.setAttribute("id","pricetotal")
        parentMonpanier = document.querySelector("div.monpanier");
        parentMonpanier.appendChild(priceTotal);
        priceTotal.innerHTML = "Total:&nbsp<strong>"+sum.toFixed(2)+"&nbsp€"+"</strong>";

        eltLienContinuer = document.createElement("a");
        eltLienContinuer.setAttribute("id","lien-continuer");
        eltLienContinuer.setAttribute("href","index.html");
        parentMonpanier.appendChild(eltLienContinuer);
    
        eltBtnContinue = document.createElement("div");
        eltBtnContinue.setAttribute("id","btn-continuer");
        eltLienContinuer.appendChild(eltBtnContinue);
        eltBtnContinue.innerHTML = "Continuer mon shopping";
    
        let p = document.getElementsByClassName("quantity-inp");
        for (let i=0;i<p.length; i++){
            p[i].addEventListener("change",function(){
                monPanier[i].quantity = p[i].value;
                localStorage.setItem("monPanier",JSON.stringify(monPanier));
                eltP = document.getElementById(`price-produit-${i}`);
                eltP.innerHTML = "Price:"+(monPanier[i].price/100).toFixed(2)+"&nbsp€"+`(*${monPanier[i].quantity}）`;
                pItemTotal = document.getElementById(`pItemTotal-${i}`);
                pItemTotal.innerHTML = ((monPanier[i].quantity)*(monPanier[i].price/100)).toFixed(2)+"&nbsp€";
                sum = 0;
                for(let i=0;i<monPanier.length;i++){
                    sum+=(monPanier[i].quantity)*(monPanier[i].price/100);
                    }
                priceTotal.innerHTML = "Total:&nbsp<strong>"+sum.toFixed(2)+"&nbsp€"+"</strong>";
                }
            )
        }

}
function formValidation(){
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
            
}
if(monPanier==null|| monPanier.length==0){
    appendEltPanierVide()
}else{

        appendEltPanierNonVide();
        formValidation();
 
        
          
        document.getElementById("btn-commande").addEventListener("click",function(){
            
            
            if (validEmail(form.email) && validAdresse(form.adresse) && validCodePostale(form.codepostale)
                &&(form.nom.value)&&(form.prenom.value)&&(form.city.value)){
                    // localStorage.removeItem("monPanier");
                   
                    let contact=new Object();
                    let formPurchaseOrder = new Object();
                    
                    contact.firstName = form.nom.value;
                    contact.lastName = form.prenom.value;
                    contact.email = form.email.value;
                    contact.address = form.adresse.value;
                    contact.city = form.city.value;
                    formPurchaseOrder = {contact,products:[]}
               
                    
      
               
        
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
    
            .then(function(value) {
              
            let monCommande = new Object();
            monCommande.listOfProductsCommanded = monPanier;
            monCommande.contact = value.contact;
            monCommande.orderId = value.orderId;
              

            
            localStorage.setItem("monCommande",JSON.stringify(monCommande));
            
                
                localStorage.removeItem("monPanier");
               
                
                  
                

                }
            );  
            
        };
        document.getElementById("btn-link").href="commandeSuccess.html"; 
            }
            
        )
    } 


             
