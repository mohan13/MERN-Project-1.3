import React from 'react'

const profile = ({Image}) => {
  return (
    <div className='h-10 w-10'>
      <img alt='' src={Image} className='w-full h-full'/>
    </div>
  )
}

export default profile