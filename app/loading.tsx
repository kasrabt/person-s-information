import React from 'react'

export default function Loading() {
  return (
    <div className='absolute flex justify-center h-screen w-full bg-black bg-opacity-90 items-center'>
      <span className="loading loading-spinner text-primary w-52 h-52"></span>
    </div>
  )
}
