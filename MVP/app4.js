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

for (let i=0; i<localStorage.length;i++){

    let eltA = document.createElement("a");
    eltA.setAttribute("id",`lien-${i}`);
    eltA.setAttribute("class","lien");
    parentP.appendChild(eltA);
    document.getElementById(`lien-${i}`).href="page2.html";
    eltA.addEventListener("click",function(){
       let p = JSON.parse(localStorage.getItem(`peluche-${id}`));
        localStorage.setItem("optionItem",JSON.stringify(p))
        
        
    });
   
    let eltP = document.createElement("div");
    eltP.setAttribute("id",`peluche-${id}`);
    eltP.setAttribute("class","peluche-carte")
    eltA.appendChild(eltP);
    eltP.style.height = "450px";
    
   
    let eltImage = document.createElement("img");
    eltImage.setAttribute("id",`image-${id}`);
    eltImage.setAttribute("class","peluche-image")
    eltP.appendChild(eltImage);
    eltImage.style.height = "320px"
    document.getElementById(`image-${id}`).src=p.imageUrl;
    let eltH3 = document.createElement("h3");
    eltH3.setAttribute("id", `title-${id}`);
    eltH3.setAttribute("class","peluche-titre")
    eltP.appendChild(eltH3);
    document.getElementById(`title-${id}`).innerHTML=p.name;
    let eltD = document.createElement("p");
    eltD.setAttribute("id",`description-${id}`);
    eltD.setAttribute("class","peluche-desp");
    eltP.appendChild(eltD);
    document.getElementById(`description-${id}`).innerHTML = p.description;
    let eltPrice = document.createElement("p");
    eltPrice.setAttribute("id",`price-${id}`);
    eltPrice.setAttribute("class","peluche-price")
    eltP.appendChild(eltPrice);
    document.getElementById(`price-${id}`).innerHTML =`Price:${(p.price/100).toFixed(2)}€`

 }   
               
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


let parentP = document.querySelector("main");

parentP.style.display = "flex";
parentP.style.flexWrap = "wrap";
parentP.style.justifyItems = 'center';



 







