import React from 'react'

function Background() {
  return (
    <div className='fixed w-full h-screen z-0'>
         <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold'>Documents.</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-zinc-900 text-[25vmin] leading-none tracking-tighter'>Docs.</h1>
    </div>
  )
}

export default Background