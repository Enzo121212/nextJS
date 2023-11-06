"use client"
import React, { useEffect,useState } from 'react'
import axios from 'axios'


const apiTest = () => {
    const [loading,setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const dataResponse = await axios.get("https://dumbstockapi.com/stock?exchanges=NYSE ")
                setData(dataResponse.data)
                setLoading(false)
            }catch(error){
                console.log("ERREIUR",error)
                // setData(null)
                setLoading(false)

            }
        }
        fetchData()

    },[])

  return (
    <>
        <h1>Liste des noms presensts</h1>
            {
                loading ? (
                    <p> Chargement en cours....</p>
                ) :(
                    <ul>
                        {data && data.map(item =>(
                            <>
                             <li key={item.ticker}>
                                {item.name} 
                                {item.ticker}
                                {item.exchange}
                            </li>
                            <br/>
                            </>

                        ))}
                    </ul>
                )
            }
    </>
  )
}

export default apiTest
