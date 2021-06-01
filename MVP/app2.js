let produitOption=JSON.parse(localStorage.getItem("optionItem"));
document.getElementById("title-peluche").innerHTML = produitOption.name;
document.getElementById("desp-peluche").innerHTML = produitOption.description;
document.getElementById("price-peluche").innerHTML = "Price:"+(produitOption.price/100).toFixed(2)+"€";
document.getElementById("image-peluche").src = produitOption.imageUrl;
let typesColor = produitOption.colors;
let parentP = document.getElementById("form-selection");
for (let color of typesColor){
    let eltOption = document.createElement("option");
    parentP.appendChild(eltOption);
    eltOption.setAttribute("class","color-peluche");
    eltOption.innerHTML=color;
    // eltOption.style.backgroundColor=color;
    eltOption.style.color = "black";
 }   



let btnPanier = document.getElementById("btn-panier");
btnPanier.addEventListener("click",function(){
    
    let monPanier = JSON.parse(localStorage.getItem("monPanier"));
    
    if(monPanier){
        
        monPanier.push(produitOption);
        p=JSON.stringify(monPanier)
        localStorage.setItem("monPanier",p);

    }else{
        let monPanier=[];
        monPanier.push(produitOption);
        p=JSON.stringify(monPanier)
        localStorage.setItem("monPanier",p);
    }

})

localStorage.setItem("")

let colorSelect = document.getElementById("form-selection");
colorSelect.addEventListener("change",function(){
    let index = colorSelect.selectedIndex;
    let colorSelected = colorSelect.options[index].value;})

    // let itemSelected = {
    //          name : produitOption.name,
    //          description:produitOption.description,
    //          price:produitOption.price,
    //          color:colorSelected
    //      } 
    // console.log(colorSelected);
    // console.log(itemSelected)



console.log("ok")
