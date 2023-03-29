import { json } from "react-router-dom";

 let url = "https://insta-clone-database.onrender.com";

function Data(){
return url;
}


function FeatchData(){
return fetch(`${Data()}/post`)
.then(res=>res.json())
}

function AddData(data){
 
    return fetch(`${Data()}/post`,{
        method:"POST",
        // headers:{
        //     "content-type":"application/json",
        //     "accept":"application/json",
        // },
        body:data
      
    })
    .then(res=>res.json())
}



export {FeatchData, AddData}