import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';
export default function SignUp() {
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const [formData,setFormData]=useState({});
  const handleChange=(event)=>{
      setFormData(
        {
          ...formData,
          [event.target.id]:event.target.value,

        }
      );
  };
  const handleSubmit=async(event)=>{
    event.preventDefault();
    try {
      
      setLoading(true);
      const res=await fetch('/api/auth/signup',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data=await res.json();
      if(data.success === false){
        setError(data.message); 
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null)
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center text-slate-300  font-semibold my-8'>Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange}></input>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}></input>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}></input>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-40'>
          {loading?'loading...': 'Sign Up'}</button>
          <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-600'>Sign in</span>
        </Link>
        <div>
          {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
      </div>
    </div>
  )
}
