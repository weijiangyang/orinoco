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
            localStorage.setItem("IdsPeluche",JSON.stringify(idsPeluche))
        };
        
        
        let listPeluches=[];
        for (let id of idsPeluche){
            
            fetch("http://localhost:3000/api/teddies"+"/"+id)
           
            .then(function(res){
                if(res.ok){
                    return res.json();}})
            .then(function(value){
                listPeluches.push(value);
                localStorage.setItem("listPeluches",JSON.stringify(listPeluches));
                
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
let listPeluches= JSON.parse(localStorage.getItem("listPeluches"));
let parentP = document.querySelector("main");

parentP.style.display = "flex";
parentP.style.flexWrap = "wrap";
parentP.style.justifyItems = 'center';

for (let i=0; i<listPeluches.length;i++){

    let eltA = document.createElement("a");
    eltA.setAttribute("id",`lien-${i}`);
    eltA.setAttribute("class","lien");
    parentP.appendChild(eltA);
    document.getElementById(`lien-${i}`).href="page2.html"
    eltA.addEventListener("click",function(){
        localStorage.setItem("produitOption",localStorage.getItem)
    })
    
    
    
    
    
    let eltP = document.createElement("div");
    eltP.setAttribute("id",`peluche-${i}`);
    eltP.setAttribute("class","peluche-carte")
    eltA.appendChild(eltP);
    eltP.style.height = "450px";
    
   
    let eltImage = document.createElement("img");
    eltImage.setAttribute("id",`image-${i}`);
    eltImage.setAttribute("class","peluche-image")
    eltP.appendChild(eltImage);
    eltImage.style.height = "320px"
    document.getElementById(`image-${i}`).src=listPeluches[i].imageUrl;
    let eltH3 = document.createElement("h3");
    eltH3.setAttribute("id", `title-${i}`);
    eltH3.setAttribute("class","peluche-titre")
    eltP.appendChild(eltH3);
    document.getElementById(`title-${i}`).innerHTML=listPeluches[i].name;
    let eltD = document.createElement("p");
    eltD.setAttribute("id",`description-${i}`);
    eltD.setAttribute("class","peluche-desp");
    eltP.appendChild(eltD);
    document.getElementById(`description-${i}`).innerHTML = listPeluches[i].description;
    let eltPrice = document.createElement("p");
    eltPrice.setAttribute("id",`price-${i}`);
    eltPrice.setAttribute("class","peluche-price")
    eltP.appendChild(eltPrice);
    document.getElementById(`price-${i}`).innerHTML =`Price:${(listPeluches[i].price/100).toFixed(2)}€`

 }   






