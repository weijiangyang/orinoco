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
            // localStorage.setItem("Ids",JSON.stringify(ids))
        };
        // console.log(ids)
        
        for (let id of ids){
            
            fetch("http://localhost:3000/api/teddies"+"/"+id)
           
            .then(function(res){
                if(res.ok){
                    return res.json();}})
            .then(function(value){
        let listProduits = JSON.parse(localStorage.getItem("itemproduits"));

        if(listProduits){
    
        listProduits.push(value);
        localStorage.setItem("itemproduits",JSON.stringify(listProduits));
        
       
            
        }else{
            listProduits=[];
            listProduits.push(value);
            localStorage.setItem("itemProduits",JSON.stringify(listProduits))
            
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


