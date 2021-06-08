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
                    return res.json();}})
            .then(function(value){
                
                localStorage.setItem(`peluche-${id}`,JSON.stringify(value));
                let eltA = document.createElement("a");
                let parentP = document.querySelector("#total-produits");
    eltA.setAttribute("id",`lien-${id}`);
    eltA.setAttribute("class","lien");
    parentP.appendChild(eltA);
    document.getElementById(`lien-${id}`).href="./optionProduit.html";
    
    // let p = JSON.parse(localStorage.getItem(`peluche-${id}`));
    let eltP = document.createElement("div");
    eltP.setAttribute("id",`peluche-${id}`);
    eltP.setAttribute("class","peluche-carte");
    eltA.appendChild(eltP);
    eltP.style.height = "450px";
    
   
    let eltImage = document.createElement("img");
    eltImage.setAttribute("id",`image-${id}`);
    eltImage.setAttribute("class","peluche-image")
    eltP.appendChild(eltImage);
    eltImage.style.height = "320px"
    document.getElementById(`image-${id}`).src=value.imageUrl;
    let eltH3 = document.createElement("h3");
    eltH3.setAttribute("id", `title-${id}`);
    eltH3.setAttribute("class","peluche-titre")
    eltP.appendChild(eltH3);
    document.getElementById(`title-${id}`).innerHTML=value.name;
    let eltD = document.createElement("p");
    eltD.setAttribute("id",`description-${id}`);
    eltD.setAttribute("class","peluche-desp");
    eltP.appendChild(eltD);
    document.getElementById(`description-${id}`).innerHTML = value.description;
    let eltPrice = document.createElement("p");
    eltPrice.setAttribute("id",`price-${id}`);
    eltPrice.setAttribute("class","peluche-price")
    eltP.appendChild(eltPrice);
    document.getElementById(`price-${id}`).innerHTML =`Price:${(value.price/100).toFixed(2)}€`;
        
    parentP.style.display = "flex";
    parentP.style.flexWrap = "wrap";
    parentP.style.justifyItems = 'center';    
    eltA.addEventListener("click",function(){
        // let p = JSON.parse(localStorage.getItem(`peluche-${id}`));
         localStorage.setItem("optionItem",JSON.stringify(value))
         
         
     });

               
                })
            
              .catch(function(err){
                console.log("il y a un error")
            })
            console.log(localStorage.getItem(`peluche-${id}`));
            
     };

     
    
    })       
            

    .catch(function(err){
        console.log("il y a un error")
    })
     
    
}
    
getPelucheInf();
document.getElementById("menu-pilier").addEventListener(
    "click",function(){
        // document.getElementById("menubar").style.display="none";
        document.getElementById("menu-extend").style.display="block";
        // document.getElementById("second-bar").style.display="none";
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












