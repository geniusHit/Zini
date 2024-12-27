import React from 'react'

const CheckingOTP = () => {
  return (
    <div>
      <form className='border rounded-3 border-secondary-emphasis p-3 mt-3' style={{width:"100%"}}>
        <span className='fs-4 fw-semibold'>Create Account</span>
        
        <div className='mt-3 fw-bold' style={{fontSize:"10pt"}}>Enter OTP</div>
        <input type='text' className='form-control mt-2' style={{width:"100%", display:"inline", float:"right", fontSize:"10pt"}} disabled></input>
      </form>
    </div>
  )
}

export default CheckingOTP