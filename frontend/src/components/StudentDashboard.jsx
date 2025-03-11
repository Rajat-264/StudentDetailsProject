import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const StudentDashboard = () => {
  return (
    <div className='p-10 ml-14'>
        <div className='mb-2'>
            <h1 className='text-3xl font-bold m-1'>Kranti Sambhav</h1>     
            <h1 className='font-semibold m-1 text-xl'>B220970CS</h1> 
        </div>   
        <div className='mt-10'>
            <h1 className='font-semibold'>kranti_b220970cs@gmail.com</h1>   
            <h1 className='font-semibold'>CS01</h1> 
        </div>    
        <div className=' flex mt-10 gap-20'>
        <Link to="/UpdateDetails" style={{ textDecoration: "none" }}>
          <Button buttonText='Update Details' />  
        </Link>
        <Link to="/ViewDetails" style={{ textDecoration: "none" }}>
          <Button buttonText='View Details'/>
          </Link>
        </div>  
    </div>
  )
}

export default StudentDashboard