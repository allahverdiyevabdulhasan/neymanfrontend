import React from 'react'
import BounceLoader from "react-spinners/BounceLoader"
import './Loading.scss'
export default function () {
  return (
    <div className='loading ' ><BounceLoader className='icon' color="#ffffff" /></div>
  )
}