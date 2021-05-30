function getPelucheInf(){
    fetch("http://localhost:3000/api/teddies")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(value){
        let ids=[];
        // console.log(value.length);
        for (let i=0; i<value.length;i++){
            let id=value[i]._id;
            ids.push(id);
        };
        // console.log(ids)
        for (let id of ids){
            
            fetch("http://localhost:3000/api/teddies"+"/"+id)
            .then(function(res){
                if(res.ok){
                    return res.json();}})
            .then(function(value){
                let listProduits = JSON.parse(localStorage.getItem("itemProduit"));
                if (listProduits){
                    listProduits.push(value);
                    localStorage.setItem("itemProduits",JSON.stringify(listProduits));

                }else{
                    listProduits = [];
                    listProduits.push(value);
                    localStorage.setItem("itemProduits",JSON.stringify(listProduits));
                }
                
                // localStorage.setItem("produit-"+id,JSON.stringify(value));
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

// let p =JSON.parse(localStorage.getItem("produit-5be9c8541c9d440000665243"));
// console.log(p.colors)
