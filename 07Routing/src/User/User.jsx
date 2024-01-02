import React from 'react'
import { useParams } from 'react-router-dom'

//yaha excces mil gya userid ka name same rakhna
const User = () => {

    const {userid} = useParams();
  return (
    <div className='bg-gray-600 text-white py-4 px-3 text-center'>
      User : {userid}
    </div>
  )
}

export default User
