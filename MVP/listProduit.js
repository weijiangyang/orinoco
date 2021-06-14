function getPelucheInf(){
    fetch("http://localhost:3000/api/teddies")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(value){
        let idsPeluche=[];
        
        for (let i=0; i<value.length;i++){
            let id=value[i]._id;
            idsPeluche.push(id);
        };
        
        for (let id of idsPeluche){
            
            fetch("http://localhost:3000/api/teddies"+"/"+id)
                .then(function(res){
                    if(res.ok){
                        return res.json();
                    }
                })
                .then(function(value){
                    
                    localStorage.setItem(`peluche-${id}`,JSON.stringify(value));
                    let eltLink = document.createElement("a");
                    let totalProduits = document.querySelector("#total-produits");
                    eltLink.setAttribute("id",`lien-${id}`);
                    eltLink.setAttribute("class","lien");
                    totalProduits.appendChild(eltLink);
                    document.getElementById(`lien-${id}`).href="./optionProduit.html";
                    
                    
                    let peulucheCarte = document.createElement("div");
                    peulucheCarte.setAttribute("id",`peluche-${id}`);
                    peulucheCarte.setAttribute("class","peluche-carte");
                    eltLink.appendChild(peulucheCarte);
                    peulucheCarte.style.height = "450px";
                    
                
                    let eltImage = document.createElement("img");
                    eltImage.setAttribute("id",`image-${id}`);
                    eltImage.setAttribute("class","peluche-image");
                    peulucheCarte.appendChild(eltImage);
                    eltImage.style.height = "320px";
                    document.getElementById(`image-${id}`).src=value.imageUrl;
                    let peulucheTitre = document.createElement("h3");
                    peulucheTitre.setAttribute("id", `title-${id}`);
                    peulucheTitre.setAttribute("class","peluche-titre")
                    peulucheCarte.appendChild(peulucheTitre);
                    document.getElementById(`title-${id}`).innerHTML=value.name;
                    let peulucheDesp = document.createElement("p");
                    peulucheDesp.setAttribute("id",`description-${id}`);
                    peulucheDesp.setAttribute("class","peluche-desp");
                    peulucheCarte.appendChild(peulucheDesp);
                    document.getElementById(`description-${id}`).innerHTML = value.description;
                    let peuluchePrice = document.createElement("p");
                    peuluchePrice.setAttribute("id",`price-${id}`);
                    peuluchePrice.setAttribute("class","peluche-price")
                    peulucheCarte.appendChild(peuluchePrice);
                    document.getElementById(`price-${id}`).innerHTML =`Price:${(value.price/100).toFixed(2)}€`;
                        
                    totalProduits.style.display = "flex";
                    totalProduits.style.flexWrap = "wrap";
                    totalProduits.style.justifyItems = 'center';    
                    eltLink.addEventListener("click",function(){
                        localStorage.setItem("optionItem",JSON.stringify(value))
                    });        
                })
                .catch(function(err){
                    console.log("il y a un error")
                })
        };    
    })        
    .catch(function(err){
        console.log("il y a un error")
    })
}
     
getPelucheInf();    
           
            
function menuPilier(){
    document.getElementById("menu-pilier").addEventListener(
    "click",function(){
        document.getElementById("menu-extend").style.display="block";
        document.getElementById("third-bar").style.transformOrigin="left";
        document.getElementById("first-bar").style.transformOrigin="left";
        document.getElementById("first-bar").style.transform="rotateZ(28deg)";
        document.getElementById("third-bar").style.transform="rotateZ(-28deg)";
        document.getElementById("third-bar").style.transition=".2s";
        document.getElementById("first-bar").style.transition=".2s";
        document.getElementById("second-bar").style.display="none";
        document.getElementById("first-bar").style.transition="left";
        }
    )    
}    

menuPilier();
    
     
    

    














