/** récupérer les données du serveur et les afficher sur la page
    * @param none
    * @return none
**/
function getPeulucheInf(){
    fetch("http://localhost:3000/api/teddies")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(peuluches){
        /** afficher les elements sur la page
             * @param none
             * @return none
         **/
        function elementAppend(){
            for (let peuluche of peuluches){
                let htmlElement = 
                    `<a class="lien" href="./html/optionProduit.html?id=${peuluche._id}">
                        <div class="peuluche-carte" style="height:450px">
                            <img class="peuluche-image" src= "${peuluche.imageUrl}" style="height:320px">
                            <h3 class="peuluche-titre">${peuluche.name}</h3>
                            <p class="peuluche-desp">${peuluche.description}</p>
                            <p class="peuluche-price">Price:${(peuluche.price/100).toFixed(2)}€</p>
                        </div>
                    </a>`
                document.getElementById("total-produits").innerHTML+= htmlElement    
            }
            for (let i=0; i<peuluches.length;i++){        
                document.getElementsByClassName("lien")[i].addEventListener("click",function(){
                    localStorage.setItem("optionItem",JSON.stringify(peuluches[i]))
                    });  
            }
        }                  
        elementAppend();   
    })    
    .catch(function(err){
        console.log("il y a un error")
    });    
}         
getPeulucheInf();  



   