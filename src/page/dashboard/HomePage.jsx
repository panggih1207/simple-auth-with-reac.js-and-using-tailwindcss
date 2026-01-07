import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate =useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLogin");
        navigate("/login");
        
        window.location.reload();
    }
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col  bg-blue-500'>
        <h1 className='text-5xl text-white font-black'> Anda berhasil login kehalaman Home</h1>
        <p className='text-white'> jika anda ingin logout, silahkan klik tombol logout di bawah ini</p>
        <button onClick={handleLogout} className='mt-5 bg-pink-600 text-white py-2 px-5   cursor-pointer rounded-md'> Logout</button>
    </div>
  )
}

export default HomePage