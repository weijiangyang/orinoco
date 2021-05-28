function getPelucheInf(){
    fetch("http://localhost:3000/api/teddies")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(value){
        let ids=[];
        for (let i=0; i<value.length;i++){
            let id=value[i]._id;
            ids.push(id);
        };
        for (let id of ids){
            fetch("http://localhost:3000/api/teddies/`${id}`")
            .then(function(res){
                if(res.ok){
                    return res.json();}})
            .then(function(value){
                console.log(value.color)
            })
            .catch(function(err){
                console.log("il y a un error")
            })}
        
        

    
    })
    .catch(function(err){
        console.log("il y a un error")
    })
     
    
}
    
getPelucheInf();