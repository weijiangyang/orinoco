function getPeulucheInf(){
    fetch("http://localhost:3000/api/teddies")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(peuluches){
        function elementAppend(){
            for (let peuluche of peuluches){
                let carteLink = document.createElement("a");
                let totalProduits = document.querySelector("#total-produits");
                carteLink.setAttribute("id",`link-${peuluche._id}`);
                carteLink.setAttribute("class","lien");
                totalProduits.appendChild(carteLink);
                document.getElementById(`link-${peuluche._id}`).href="./optionProduit.html";
        
                let peulucheCarte = document.createElement("div");
                peulucheCarte.setAttribute("class","peuluche-carte");
                carteLink.appendChild(peulucheCarte);
                peulucheCarte.style.height = "450px";
        
                let peulucheImage = document.createElement("img");
                peulucheImage.setAttribute("id",`image-${peuluche._id}`);
                peulucheImage.setAttribute("class","peuluche-image");
                peulucheCarte.appendChild(peulucheImage);
                peulucheImage.style.height = "320px";
                document.getElementById(`image-${peuluche._id}`).src = peuluche.imageUrl;
        
                let peulucheTitre = document.createElement("h3");
                peulucheTitre.setAttribute("id",`titre-${peuluche._id}`);
                peulucheTitre.setAttribute("class","peuluche-titre");
                peulucheCarte.appendChild(peulucheTitre);
                document.getElementById(`titre-${peuluche._id}`).innerHTML = peuluche.name;
        
                let peulucheDesp = document.createElement("p");
                peulucheDesp.setAttribute("id",`description-${peuluche._id}`);
                peulucheDesp.setAttribute("class","peuluche-desp");
                peulucheCarte.appendChild(peulucheDesp);
                document.getElementById(`description-${peuluche._id}`).innerHTML = peuluche.description;
                
                let peuluchePrice = document.createElement("p");
                peuluchePrice.setAttribute("id",`price-${peuluche._id}`);
                peuluchePrice.setAttribute("class","peuluche-price")
                peulucheCarte.appendChild(peuluchePrice);
                document.getElementById(`price-${peuluche._id}`).innerHTML =`Price:${(peuluche.price/100).toFixed(2)}€`;
        
                document.getElementById(`link-${peuluche._id}`).addEventListener("click",function(){
                localStorage.setItem("optionItem",JSON.stringify(peuluche))
                });        
            }
                
                
            let totalProduits = document.querySelector("#total-produits");
            totalProduits.style.display = "flex";
            totalProduits.style.flexWrap = "wrap";
        }   
        elementAppend();   
        console.log(peuluches) 
    })    
    .catch(function(err){
        console.log("il y a un error")
    });    
}         
getPeulucheInf();   

    
    
    




    





