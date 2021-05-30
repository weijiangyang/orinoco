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
        let i =1;
        for (let id of ids){
            
            fetch("http://localhost:3000/api/teddies"+"/"+id)
           
            .then(function(res){
                if(res.ok){
                    return res.json();}})
            .then(function(value){
                
                localStorage.setItem("peluche-"+i+(":"),JSON.stringify(value));
                i++
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




