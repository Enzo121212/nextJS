"use client"
import React from 'react'
import axios from 'axios'


const list = async() => {
    const data = await getData()
  return (
    <>
        {data.map((item) => (
        <img key={item.id} src={item.thumbnailUrl} alt={`Thumbnail ${item.title}`} />
        ))}

    </>
  )
}

export default list


async function getData(){
    const res =  await axios.get("https://jsonplaceholder.typicode.com/photos")
    return res.data;
}
