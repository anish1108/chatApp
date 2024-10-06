import React from 'react'
import Textarea from './Textarea'

const middle = () => {
  return (
    <div className=' flex flex-col justify-between bg-gray-400 w-2/3 '>
      <div className='flex flex-col gap-2'>
          <div className='bg-green-300 '>Lorem ipsum dolor sit amet.</div>
          <div className='bg-red-300'>Lorem ipsum dolor sit amet.</div>
          <div>Lorem ipsum dolor sit amet.</div>
          <div>Lorem ipsum dolor sit amet.</div>
          <div>Lorem ipsum dolor sit amet.</div>
      </div>
      <Textarea/>

    </div>
  )
}

export default middle