function getpeulucheInf(){
    let listpeuluches=[];
    fetch("http://localhost:3000/api/teddies")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(peuluches){
        
        
        for (let i=0; i<peuluches.length;i++){
            listpeuluches.push(peuluches[i])
        };
        localStorage.setItem("listpeuluches",JSON.stringify(listpeuluches));
    

});
}

function elementAppend(){
    getpeulucheInf();
    let listpeuluches = JSON.parse(localStorage.getItem("listpeuluches"));
    for (let peuluche of listpeuluches){
        let carteLink = document.createElement("a");
        let totalProduits = document.querySelector("#total-produits");
        carteLink.setAttribute("id",`link-${peuluche._id}`);
        totalProduits.appendChild(carteLink);
        document.getElementById(`link-${peuluche._id}`).href="./optionProduit.html";

        let peulucheCarte = document.createElement("div");
        peulucheCarte.setAttribute("id",`carte-${peuluche._id}`);
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
    }
        
    let totalProduits = document.querySelector("#total-produits");
    totalProduits.style.display = "flex";
    totalProduits.style.flexWrap = "wrap";
    totalProduits.style.justifyItems = 'center';
 }   
elementAppend();



