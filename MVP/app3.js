// console.log(JSON.parse(localStorage.getItem("produits")));


let monPanier = JSON.parse(localStorage.getItem("monPanier"));
parentMain = document.querySelector("main");
parentM = document.getElementById("monpanier-inf");
if(monPanier.length==0){
   eltMonpanier = document.querySelector("div.monpanier");
   eltCommand = document.querySelector("div#command");
   parentMain.removeChild(eltMonpanier);
   parentMain.removeChild(eltCommand);
   eltVide = document.createElement("div");
   eltVide.setAttribute("class","vide");
   parentMain.appendChild(eltVide);
   eltVide.innerHTML = "Votre panier est vide pour le moment!";
   eltL = document.createElement("a");
   eltL.setAttribute("id","commencechoisir");
   parentMain.appendChild(eltL);
   eltL.innerHTML = "Choisissez vos produits et les ajouter au panier maintenant";
   eltL.href = "index.html";
   

   
}else{

let sum = 0;
for (let i=0;i<monPanier.length;i++){
   

parentD = document.createElement("div");
parentD.setAttribute("class","carte");
parentD.setAttribute("id",`carte-${i}`)
parentM.appendChild(parentD);

eltImage = document.createElement("div");
eltImage.setAttribute("class","image-produit");
parentD.appendChild(eltImage);
eltImg=document.createElement("img");
eltImg.src=monPanier[i].imageUrl;
eltImage.appendChild(eltImg);

eltT = document.createElement("div");
eltT.setAttribute("class","info-produit");
eltT.setAttribute("id",`infor-produit-${i}`)
parentD.appendChild(eltT);

eltN = document.createElement("h2");
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

pItemTotal = document.createElement("p");
pItemTotal.setAttribute("id",`pItemTotal-${i}`);
eltT.appendChild(pItemTotal);
pItemTotal.innerHTML = ((monPanier[i].quantity)*(monPanier[i].price/100)).toFixed(2)+"&nbsp€";
sum+=(monPanier[i].quantity)*(monPanier[i].price/100);

btn = document.createElement("button");
eltT.appendChild(btn);
btn.innerHTML = "Supprimer";
btn.addEventListener("click",function(){
    monPanier.splice(i,i+1);
    localStorage.setItem("monPanier",JSON.stringify(monPanier));
    location.reload();
    console.log(monPanier)
})
}

console.log(sum);

// eltTotal = document.createElement("p");
// eltTotal.setAttribute("id","price-total");
// eltCommand = document.getElementById("command");
// parentMain.appendChild(eltCommand);

// eltCommand.appendChild(eltTotal);
// eltTotal.innerHTML="Total:<strong>"+sum.toFixed(2)+"€"+"</strong>";

priceTotal = document.getElementById("pricetotal");
parentMonpanier = document.querySelector(".monpanier");
parentMonpanier.appendChild(priceTotal);
priceTotal.innerHTML = "Total:&nbsp<strong>"+sum.toFixed(2)+"&nbsp€"+"</strong>";

// eltBtnCommand = document.createElement("div");
// eltBtnCommand.setAttribute("id","btn-command");
// eltCommand.appendChild(eltBtnCommand);
// eltBtnCommand.innerHTML = "Passer la commande";

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
       console.log(sum);
    //    eltTotal.innerHTML="Total:"+sum.toFixed(2)+"€";
       priceTotal.innerHTML = "Total:&nbsp<strong>"+sum.toFixed(2)+"&nbsp€"+"</strong>";

   })
    
}
}