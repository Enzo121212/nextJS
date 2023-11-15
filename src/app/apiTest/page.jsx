"use client"
import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Suspense } from 'react'
import Todos from './Todos'
import Loading from './loading'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import Error from './error'


const  apiTest = () => {
    // const [loading,setLoading] = useState(true)
    // const [data, setData] = useState(null)

    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         try{
    //             const dataResponse = await axios.get("https://dumbstockapi.com/stock?exchanges=NYSE ")
    //             setData(dataResponse.data)
    //             setLoading(false)
    //         }catch(error){
    //             console.log("ERREIUR",error)
    //             // setData(null)
    //             setLoading(false)

    //         }
    //     }
    //     fetchData()

    // },[])

  return (
    <>
        <h1>Liste des noms presents</h1>
        <Suspense fallback={<Loading/>}>
              <Todos/>
        </Suspense>

    </>
  )
}

export default apiTest
