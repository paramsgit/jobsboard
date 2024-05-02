import { useState,useEffect } from "react";

export const useApi=({url,options})=>{
const [data,setData]=useState(null);
const [isLoading,setIsLoading]=useState(false);
const [error,setError]=useState(null);

const fetchData=async ()=>{
    setIsLoading(true);

    try {
        const response= await fetch(url,options);
        const responseData=await response.json()
        setData(responseData);
    } catch (error) {
        setError(error)
    }
    setIsLoading(false)
}
    useEffect(() => {
      fetchData()
    }, [])

    return {data,isLoading,error};
    
}