import React, { useState, useRef } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { FaCaretRight } from "react-icons/fa";
import Axios from 'axios'
import Navbar from '../Components/Navbar';

const Signup = () => {
  const [username, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [realOtp, setRealOtp] = useState(null)
  const [userOtp, setUserOtp] = useState(null)
  const [otp, setOTP] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  const nameError = useRef()
  const emailError = useRef()
  const passError = useRef()
  const otpinput = useRef()
  const verifybtn = useRef()
  const signupbtn = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const sendotp = await Axios.get(`http://localhost:8011/sendotp/${email}`)
    // navigate("/checkotp", {state:{...location.state, name:username, email:email, password:password}})
    otpinput.current.removeAttribute("disabled")
    verifybtn.current.style.display = "none"
    signupbtn.current.style.display = "block"

    // setRealOtp(sendotp.data.otp)
    console.log("sendotp.data.otp = ", sendotp.data.otp)
    setRealOtp(sendotp.data.otp)
  }

  const signup = async () => {
    console.log("userOtp = ", parseInt(userOtp))
    console.log("realOtp = ", parseInt(realOtp))
    if (parseInt(userOtp) == parseInt(realOtp)) {
      await Axios.post(`http://localhost:8011/signup`, { username: username, email: email, password: password })
        .then(() => {
          alert("Signup successful")
          navigate("/", {state:{...location.state, name:username, email:email}})
        })
        .catch((error) => {
          alert("Couldn't signup ", error)
        })
    }
    else{
      alert("Wrong OTP")
    }
  }

  return (
    <div className=''>
      <Navbar />

      <div className='mx-auto' style={{ width: "23%" }}>
        <div className='text-center' style={{}}><span className='fs-2 fw-bold'>Zini</span>.in</div>

        <form onSubmit={handleSubmit} className='border rounded-3 border-secondary-emphasis p-3 mt-3' style={{ width: "100%" }}>
          <span className='fs-4 fw-semibold'>Create Account</span>

          <div className='mt-3 fw-bold' style={{ fontSize: "10pt" }}>Your Name</div>
          <input className='w-100 form-control mt-2' style={{ fontSize: "10pt" }} type='text' placeholder='First and Last Name' onChange={(e) => {
            setName(e.target.value)

            if (e.target.value == "") {
              nameError.current.textContent = "Please enter Name!"
            }
            else if (e.target.value.length < 3 || e.target.value.length > 30) {
              nameError.current.textContent = "3 to 30 characters only"
            }
            else if (/\d/.test(e.target.value)) {
              nameError.current.textContent = "Numbers are not allowed!"
            }
            else {
              nameError.current.textContent = ""
            }
          }}></input>
          <div ref={nameError} className='text-danger mt-2' style={{ fontSize: "9pt" }}></div>

          <div className='mt-3 fw-bold' style={{ fontSize: "10pt" }}>Email</div>
          <input type='email' className='form-control mt-2' style={{ width: "100%", display: "inline", float: "right", fontSize: "10pt" }} onChange={(e) => {
            setEmail(e.target.value)
          }}></input>
          <div ref={emailError} className='text-danger mt-2' style={{ fontSize: "9pt" }}></div>

          <div className='mt-5 fw-bold' style={{ fontSize: "10pt" }}>Password</div>
          <input className='w-100 form-control mt-2' style={{ fontSize: "10pt" }} type='password' placeholder="At least 6 characters" onChange={(e) => {
            setPassword(e.target.value)
            if (e.target.value == "") {
              passError.current.textContent = "Enter password"
            }
            else if (e.target.value.length < 6 || e.target.value.length > 10) {
              passError.current.textContent = "6 to 10 characters only"
            }
            else {
              passError.current.textContent = ""
            }
          }}></input>
          <div ref={passError}></div>

          <div className='mt-3 fw-bold' style={{ fontSize: "10pt" }}>Enter OTP</div>
          <input type='text' className='form-control mt-2' onChange={(e) => { setUserOtp(e.target.value) }} style={{ width: "100%", display: "inline", float: "right", fontSize: "10pt" }} ref={otpinput} disabled></input>

          <div className='mt-3 fw-semibold' style={{ fontSize: "10pt" }}>
            To verify your email, we will send you a text message with a temporary code. Message and data rates may apply.
          </div>

          <input type='submit' ref={verifybtn} className='bg-warning w-100 btn mt-4 shadow-sm' style={{ fontSize: "10pt" }} value="Verify email"></input>

          <input type='button' ref={signupbtn} onClick={signup} className='bg-warning w-100 btn mt-4 shadow-sm' style={{ fontSize: "10pt", display:"none" }} value="Signup"></input>

          <hr
            className="my-4"
            style={{
              height: "2px",
              border: "none", // Remove default border
              background: "linear-gradient(to right, transparent 5%, gray, transparent 95%)"
              //the percentage of color is the stopping of color at the specific percentage of width.
            }}
          />

          <div className='my-4' style={{ fontSize: "10pt" }}>
            Already have an account?
            <span><NavLink to="/signin" className="ms-1 text-decoration-none">Sign in <FaCaretRight /></NavLink></span>
          </div>
        </form>
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

      <div className='py-4 d-flex flex-column justify-content-center align-items-center' style={{ fontSize: "9pt" }}>
        <div className='d-flex justify-content-between' style={{ width: "16%" }}>
          <NavLink className="text-decoration-none">Conditions of Use</NavLink>
          <NavLink className="text-decoration-none">Privacy Notice</NavLink>
          <NavLink className="text-decoration-none">Help</NavLink>
        </div>

        <div className='text-secondary mt-2'>© 1996-2024, Zini.com, Inc. or its affiliates</div>
      </div>
    </div>
  )
}

export default Signup