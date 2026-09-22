import React, {useState} from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const AdminSignin = () => {
  const API_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:8011"
      : "https://zini-backend.vercel.app";

  const [email, setEmail]=useState(null)
  const [password, setPassword]=useState(null)
  const link=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()

    try{
      const result = await Axios.get(`${API_URL}/adminsignin/`, {email})
      if(result.data.password==password)
      {
        link("/adminpage")
      }
      else{
        alert("Wrong password!")
      }
    }
    catch(error)
    {
        console.log("Wrong email : ", error)
    }
  }

  return (
    <div style={{minWidth:"1350px"}}>
      <Navbar/>
      <div className='mx-auto' style={{width:"23%"}}>
        <div className='text-center' style={{}}><span className='fs-2 fw-bold'>Zini</span>.in</div>

        <form className='border rounded-3 border-secondary-emphasis p-3 mt-3' style={{width:"100%"}} onSubmit={handleSubmit}>
            <span className='fs-4 fw-semibold'>Admin Sign In</span>

            <div className='mt-3 fw-bold' style={{fontSize:"10pt"}}>Email</div>
            <input className='w-100 form-control mt-2' style={{fontSize:"10pt"}} type='text' onChange={(e)=>setEmail(e.target.value)}></input>
            <div id='emailError'></div>

            <div className='mt-3 fw-bold' style={{fontSize:"10pt"}}>Password</div>
            <input className='w-100 form-control mt-2' style={{fontSize:"10pt"}} type='password' onChange={(e)=>setPassword(e.target.value)}></input>
            <div id='passError'></div>

            <input type='submit' className='bg-warning w-100 btn mt-4 shadow-sm' style={{fontSize:"10pt"}} value="Continue"></input>
        </form>
      </div>
    </div>
  )
}

export default AdminSignin