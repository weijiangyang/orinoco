function getPelucheInf(){
    let listPeluches=[];
    fetch("http://localhost:3000/api/teddies")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(peluches){
        
        
        for (let i=0; i<peluches.length;i++){
            listPeluches.push(peluches[i])
        };
        localStorage.setItem("listPeluches",JSON.stringify(listPeluches));
    

});
}

function elementAppend(){
    getPelucheInf();
    let listPeluches = JSON.parse(localStorage.getItem("listPeluches"));
    for (let peuluche of listPeluches){
        let carteLink = document.createElement("a");
        let totalProduits = document.querySelector("#total-produits");
        carteLink.setAttribute("id",`link-${peluche._id}`);
        totalProduits.appendChild(carteLink);
        document.getElementById(`link-${peluche._id}`).href="./optionProduit.html";

        let peulucheCarte = document.createElement("div");
        peulucheCarte.setAttribute("id",`carte-${peluche._id}`);
        peulucheCarte.setAttribute("class","peluche-carte");
        carteLink.appendChild(peulucheCarte);
        peulucheCarte.style.height = "450px";

        let peulucheImage = document.createElement("img");
        peulucheImage.setAttribute("id",`image-${peluche._id}`);
        peulucheImage.setAttribute("class","peuluche-image");
        peulucheCarte.appendChild(peulucheImage);
        peulucheImage.style.height = "320px";
        document.getElementById(`image-${peluche._id}`).src = peuluche.imageUrl;

        let peulucheTitre = document.createElement("h3");
        peulucheTitre.setAttribute("id",`titre-${peluche._id}`);
        peulucheTitre.setAttribute("class","peluche-titre");
        peulucheCarte.appendChild(peulucheTitre);
        document.getElementById(`titre-${peluche._id}`).innerHTML = peuluche.name;

        let peulucheDesp = document.createElement("p");
        peulucheDesp.setAttribute("id",`description-${peluche._id}`);
        peulucheDesp.setAttribute("class","peluche-desp");
        peulucheCarte.appendChild(peulucheDesp);
        document.getElementById(`description-${peluche._id}`).innerHTML = peuluche.description;
        
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
