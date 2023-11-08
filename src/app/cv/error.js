"use client"
import React from 'react'

const error = ({error, reset}) => {
  return (
    <div>
        <h1>Something went wrong</h1>

        <p> {error}</p>
        <button onClick={()=>reset()}> Ressayer</button>
    </div>
  )
}

export default error
