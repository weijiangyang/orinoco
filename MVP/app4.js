function getPelucheInf(){
    fetch("http://localhost:3000/api/teddies")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(value){
        let idsPeluche=[];
        // console.log(value.length);
        for (let i=0; i<value.length;i++){
            let id=value[i]._id;
            idsPeluche.push(id);
            localStorage.setItem("IdsPeluche",JSON.stringify(idsPeluche))
        };
        // console.log(ids)
        
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
let list = JSON.parse(localStorage.getItem("listPeluches"));
console.log(list[1].name)






