import React, {useState, useRef} from 'react'
import Navbar from '../Components/Navbar'
import { useLocation } from 'react-router-dom'
import Axios from 'axios'

const YourAccount = () => {
  const API_URL =
        window.location.hostname === "localhost"
          ? "http://localhost:8011"
          : "https://zini-backend.vercel.app";

  const location=useLocation()

  const newP=useRef()

  const [changePw, setChangePw]=useState(false)
  const changePassword=()=>{
    setChangePw(true)
  }

  const [oldPass, setOldPass]=useState()
  const [newPass, setNewPass]=useState()
  const pass=(e)=>{
    setOldPass(e.target.value)
  }
  const setnPass=(e)=>{
    setNewPass(e.target.value)
  }

  const continuePass=async (e)=>{
    e.preventDefault()
    console.log("oldPass = ", oldPass)
    const getPass=await Axios.get(`${API_URL}/getpassword/${location.state.mobile}`)
    if(oldPass==getPass.data.password)
    {
        newP.current.style.display="block"
    }
    if(newPass!=undefined)
    {
        await Axios.patch(`${API_URL}/updatepassword/${location.state.mobile}`, {password:newPass})
        alert("Password updated")
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      
      <div className='m-3 p-4 border rounded-3' style={{}}>
        <h4>Hello <span className='fst-italic'>{location?.state?.name && location.state.name}</span></h4>
        <h4>Mobile : {location?.state?.name && location.state.mobile}</h4>
        <button className='btn btn-dark' onClick={changePassword}>Change Password</button>

        {
            changePw==true &&
            <div className='changePw my-3 w-50'>
                <form onSubmit={continuePass}>
                    <input type='password' className='form-control my-3' placeholder='Old Password' onChange={pass}></input>
                    <input type='password' className='form-control' onChange={setnPass} ref={newP} style={{display:"none"}} placeholder='Set New Password'></input>
                    <input type='submit' className='btn btn-primary my-3' value="Continue"></input>
                </form>
            </div>
        }
      </div>
    </div>
  )
}

export default YourAccount