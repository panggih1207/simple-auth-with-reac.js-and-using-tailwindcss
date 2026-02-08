import React from 'react'

const NotFoundPages = () => {
  return (
    <div className='w-screen h-screen bg-green-600 flex items-center justify-center flex-col gap-5'>
<h1 className='text-5xl text-white font-black'>404</h1>
     <p className='text-white'> anda membuka halaman yang salah silahkan ke <Link to={/} className='cursor-pointer text-blue-600'>home page</Link></p>
    </div>
  )
}

export default NotFoundPages
