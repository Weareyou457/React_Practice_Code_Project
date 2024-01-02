import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {

    const data = useLoaderData();
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/weareyou457")
    //     .then((res)=>res.json())
    //     .then((dataa)=>
    //     // console.log(dataa)
    //     setData(dataa))
    // },[])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl '>
     Github Followers : {data.followers}
     <img src={data.avatar_url} alt="" width={200} />
     </div>
  )
}

export default Github

//laoder ka concept hai ki on mouse ke jane pr api call ho router-dom se 

export const githubInfoLoader = async () =>{
    const response = await fetch("https://api.github.com/users/weareyou457")
    return response.json()
}
