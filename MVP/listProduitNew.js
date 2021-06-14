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
getPelucheInf();
function elementAppend(){
    let listPeluches = JSON.parse(localStorage.getItem("listPeluches"));
    for (let peluche of listPeluches){
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
        
    }

}
elementAppend();
