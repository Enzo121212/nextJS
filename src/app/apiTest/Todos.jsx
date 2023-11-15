"use client"
import React from 'react'
import axios from 'axios'

const todos = async() => {
const todos = await getData()
console.log(todos)
  return (
    <>
    <div>Ma variable</div>
       {
            <ul>
                {todos && todos.map(item =>(
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
        }

</>
  )
}

export default todos

async function getData(){
    const res =  await axios.get("https://dumbstockapi.com/stock?exchanges=NYSE")

    // try{
    // }catch(error){
    //     throw new error(error)
    // }
    return res.data;
}
