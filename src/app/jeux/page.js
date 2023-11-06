"use client"
import React,{useState, useEffect} from 'react'

const jeux = () => {
    const [number, setNumber] = useState(0)

    const increment = ()=>{
        setNumber(number + 1)
    }

    const decrement = ()=>{
        setNumber(number - 1)
    }

    useEffect(()=>{
        console.log("oik")
        return()=>{
            console.log("ceci est demonter, lorsque ce composant est arrete ou change de page")
        }
    },[])
  return (
    <>
      <h1>JEUX {number}</h1>
      <p>voici le jeux que vous avez attendu</p>
      <button onClick={()=>increment()}> Increment</button> <br/>
      <button onClick={()=>decrement()}> Decrement</button> <br/>
    </>
  )
}

export default jeux
