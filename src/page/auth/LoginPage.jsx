import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const LoginPage = () => {
    const [email , setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
       

        if(email === "admin@gmail.com" && password === "admin123"){
                localStorage.setItem("isLogin", true);
                navigate("/");
                window.location.reload()
        }else{alert("email atau paswworrd salah cuyy")}

    }

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-purple-700'>
        <form onSubmit={handleSubmit}
        className='w-150 pt-5 pb-10 px-10  bg-white rounded-md  flex flex-col items-center'>
            <h1 className='text-2xl font-bold mb-10'> Card  Login</h1>
            <label htmlFor='email' className='w-full' >
                Email :

                <input type='text' className='w-full p-2 border border-gray-500  rounded-md '
                placeholder='Masukan Email' onChange={(e) => setEmail(e.target.value)}></input>
            </label>
             <label htmlFor='Password' className='w-full' >
                Password :

                <input type='password' className='w-full p-2 border border-gray-500  rounded-md'
                placeholder='Masukan Password' onChange={(e) => setPassword(e.target.value)}></input>
            </label>
            <button type='submit' className='w-full bg-blue-700 text-white  rounded-md mt-3 py-3'><Link to="/" className='cursor-pointer '> Login</Link></button>
        </form>
    </div>
  )
}

export default LoginPage