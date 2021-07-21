/**recupérer le Id dans le URL 
  * @param none
  * @return theRequest
 * */

 function GetRequest() {  
    var url = location.search;
    console.log(url)
    var theRequest = new Object(); 
    if (url.indexOf("?") != -1) { 
       var str = url.substr(1); 
       strs = str.split("&");  
       for(var i = 0; i < strs.length; i ++) {
          theRequest[strs[i].split("=")[0]]=strs[i].split("=")[1];
       }
    }
    return theRequest;  
 }
var req = GetRequest();
/**recupérer la produit par son ID à partir de L'API et la personaliser 
  * @param none
  * @return none
 * */ 
function getProduitParIdOfUrl(){
    fetch(`http://localhost:3000/api/teddies/${req.id}`)
        .then(function(res){
            if(res.ok){
                return res.json();
            }
        })
        .then(function(produit){
            /** afficher la produit récupéré sur la page 
                * @param none
                * @return none
            **/
            function produitAppend (){
                document.getElementById("title-peluche").innerHTML = produit.name;
                document.getElementById("desp-peluche").innerHTML = produit.description;
                document.getElementById("price-peluche").innerHTML = "Price:"+(produit.price/100).toFixed(2)+"€";
                document.getElementById("image-peluche").src = produit.imageUrl;
                let typesColor = produit.colors;
                let parentFormSelection = document.getElementById("form-selection");
                for (let color of typesColor){
                    let eltOption = document.createElement("option");
                    parentFormSelection.appendChild(eltOption);
                    eltOption.setAttribute("class","color-peluche");
                    eltOption.innerHTML=color;
                    eltOption.style.color = color;
                }   
            }
            produitAppend();
            // personaliser la produit choisie en choisissant la couleur et la quantity
            let produitPersonaliser = {
                name : produit.name,
                description : produit.description,
                price : produit.price,
                imageUrl:produit.imageUrl,
                id:produit._id
            }
            let inputQuantity = document.getElementById("quantity-select");
            inputQuantity.addEventListener("input",function(){
                produitPersonaliser.quantity = document.getElementById("quantity-select").value;
            })
            let inputColor = document.getElementById("form-selection");
            inputColor.addEventListener("change",function(){
                let index = document.getElementById("form-selection").selectedIndex;
                let colorSelected = document.getElementById("form-selection").options[index].value;
                produitPersonaliser.color = colorSelected;
            })
            // mettre les produits choisies et personalisées dans mon panier en cliquant le button
            document.getElementById("btn-panier").addEventListener("click",function(){
                if(produitPersonaliser.color&&produitPersonaliser.quantity){
                    let lePanier = JSON.parse(localStorage.getItem("lePanier"));
                    if(lePanier){
                        lePanier.push(produitPersonaliser);
                        localStorage.setItem("lePanier",JSON.stringify(lePanier));
                    }else{let lePanier=[];
                        lePanier.push(produitPersonaliser);
                        localStorage.setItem("lePanier",JSON.stringify(lePanier));
                    }
                document.getElementById("link-btn-panier").href="../html/monPanier.html";
                }
                document.getElementById("quantity-select").value="";
                let index = document.getElementById("form-selection").selectedIndex;
                document.getElementById("form-selection").options[index].value = "";  
            })
        })

        .catch(function(err){
            console.log("il y a un error")
        });    
};
        
getProduitParIdOfUrl();






         



 


