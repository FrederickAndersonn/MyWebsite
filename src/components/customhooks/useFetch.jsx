import React, { useState, useEffect } from 'react';
const [data, setData] = useState(null);
const useFetch = (link) => {
   useEffect(()=>{
        fetch(link)
            .then(response =>{
                if(!response){
                    throw new Error("Fetch Failed");
                }
                return response.json();
            })
            .then(result=>{
                setData(result);
            }
            )
            .catch(error =>{
                console.log("Error", error);
            })
   },[data])
}

export default useFetch