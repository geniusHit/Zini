import React, {useState, createContext, useEffect} from 'react'
import Axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useLocation } from 'react-router-dom'

const userName=createContext()
const userMobile=createContext()
const Signin = () => {
    const [email, setEmail]=useState(null)
    const [password, setPassword]=useState(null)
    const [namee, setName]=useState("")
    const link=useNavigate()
    const location=useLocation()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
          const result=await Axios.get(`http://localhost:8011/signin/${email}`)
          if(result && password==result.data.password)
          {
            console.log("result = ", result);
            setName(result.data.username)
            setEmail(result.data.email)
            console.log("name = ", namee)
            console.log("email = ", email)
            console.log("password = ", result.data.password)
          }
          else{
            alert("Wrong Password!")
          }
        }
        catch(error)
        {
          console.log("Couldn't signin ", error)
        }
    }

    useEffect(()=>{
      if(namee!="")
      {
        link("/", {state: {...location.state, name:namee, email:email}})
      }
    }, [namee])

  return (
    <div className=''>
      <userName.Provider value={namee}>
        <userMobile.Provider value={email}>
          <Navbar/>
        </userMobile.Provider>
      </userName.Provider>
      <div className='mx-auto' style={{width:"23%"}}>
        <div className='text-center' style={{}}><span className='fs-2 fw-bold'>zini</span>.in</div>

        <form onSubmit={handleSubmit} className='border rounded-3 border-secondary-emphasis p-3 mt-3' style={{width:"100%"}}>
            <span className='fs-4 fw-semibold'>Sign In</span>

            <div className='mt-3 fw-bold' style={{fontSize:"10pt"}}>Email</div>
            <input type='email' className='form-control mt-2' style={{fontSize:"10pt"}} onChange={(e)=>{
              let email=e.target.value
              setEmail(email)
            }}></input>

            <div className='mt-3 fw-bold' style={{fontSize:"10pt"}}>Password</div>
            <input className='w-100 form-control mt-2' style={{fontSize:"10pt"}} type='password' onChange={(e)=>setPassword(e.target.value)}></input>

            <input type='submit' className='bg-warning w-100 btn mt-4 shadow-sm' style={{fontSize:"10pt"}} value="Continue"></input>

            <div className='mt-4' style={{fontSize:"10pt"}}>
              By continuing you agree to Zini's
              <NavLink> Conditions of Use</NavLink> and <NavLink> Privacy Policy</NavLink>
            </div>

            <hr className='border-bottom my-4'/>

            <div className='mt-3 fw-bold' style={{fontSize:"10pt"}}>Buying for work?</div>
            <div className='text-primary' style={{fontSize:"10pt"}}>Shop on Zini Business</div>
        </form>
      </div>

      <div style={{width:"23%", height:"40px", margin:"auto", position:"relative"}} className='my-4 d-flex justify-content-center'>
        <hr style={{width:"100%", position:"absolute", marginTop:"10px", zIndex:"-1"}} className='border border-secondary' width="1"></hr>
        <span style={{fontSize:"10pt", backgroundColor:"white", color:"gray", padding:"0px 8px"}} className='text-center'>New to Zini?</span>
      </div>

      <div className='d-flex justify-content-center'>
        <NavLink to="/signup" className="" style={{width:"23%"}}><button className="btn btn-secondary py-1 w-100">Create Account</button></NavLink>
      </div>

      <hr
          className="my-4"
          style={{
              height: "2px",
              border: "none", // Remove default border
              background: "linear-gradient(to right, transparent 5%, gray, transparent 95%)"
              //the percentage of color is the stopping of color at the specific percentage of width.
          }}
        />

      <div className='py-4 d-flex flex-column justify-content-center align-items-center' style={{fontSize:"9pt"}}>
       <div className='d-flex justify-content-between' style={{width:"16%"}}>
          <NavLink className="text-decoration-none">Conditions of Use</NavLink>
          <NavLink className="text-decoration-none">Privacy Notice</NavLink>
          <NavLink className="text-decoration-none">Help</NavLink>
       </div>

       <div className='text-secondary mt-2'>© 1996-2024, Zini.com, Inc. or its affiliates</div>
      </div>
    </div>
  )
}

export default Signin
export {userName, userMobile}