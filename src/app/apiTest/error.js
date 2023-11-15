"use client"
import React from 'react'

function error(props) {
    console.log(props,"Tara")
  return (
    <div>
          {props.error}
    </div>
  )
}

export default error
