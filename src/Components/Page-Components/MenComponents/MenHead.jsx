import React from 'react'
import { Link } from 'react-router-dom'
const MenHead = () => {
  return (
    <div className='flex flex-col bg-rose-200 font-sans gap-8 py-10 items-center'>
        <h1 className='text-4xl font-bold font-jost'>
            Category
        </h1>
        <Link to='/' className='flex gap-4 text-sm'>
            <h2>Home</h2>
            <div className='w-0.5 bg-red-300'></div>
            <h2>Category</h2>
        </Link>
    </div>
  )
}

export default MenHead