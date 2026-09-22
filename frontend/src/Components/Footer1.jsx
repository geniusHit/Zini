import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { PiCaretUpDownFill } from "react-icons/pi";
import indiaflag from "../assets/Pictures/Flag_of_India.svg.png"

const Footer1 = () => {
  return (
    <div style={{minWidth:"1350px"}} className='mt-4'>
      <div className='d-flex justify-content-center text-capitalize py-5' style={{backgroundColor:"#001a33", gap:"150px"}}>
        <div style={{gap:"7px"}} className='d-flex flex-column'>
          <div className='fw-bold text-white' style={{fontSize:"14pt"}}>Get to know us</div>
          <div className='text-light'>About EComm</div>
          <div className='text-light'>Careers</div>
          <div className='text-light'>divress Releases</div>
          <div className='text-light'>EComm science</div>
        </div>

        <div style={{gap:"7px"}} className='d-flex flex-column'>
          <div className='fw-bold text-white' style={{fontSize:"14pt"}}>connect with us</div>
          <div className='text-light'>facebook</div>
          <div className='text-light'>twitter</div>
          <div className='text-light'>instagram</div>
        </div>

        <div style={{gap:"7px"}} className='d-flex flex-column'>
          <div className='fw-bold text-white' style={{fontSize:"14pt"}}>make money with us</div>
          <div className='text-light'>sell on EComm</div>
          <div className='text-light'>sell under EComm accelarator</div>
          <div className='text-light'>divrotect and build your brand</div>
          <div className='text-light'>EComm global selling</div>
          <div className='text-light'>sudivdivly to EComm</div>
          <div className='text-light'>become an affiliate</div>
          <div className='text-light'>fulfillment by EComm</div>
          <div className='text-light'>advertise your products</div>
          <div className='text-light'>EComm divay on merchants</div>
        </div>

        <div style={{gap:"7px"}} className='d-flex flex-column'>
          <div className='fw-bold text-white' style={{fontSize:"14pt"}}>let us help you</div>
          <div className='text-light'>your accout</div>
          <div className='text-light'>returns centre</div>
          <div className='text-light'>records and product safety alerts</div>
          <div className='text-light'>100% purchase protection</div>
          <div className='text-light'>EComm app download</div>
          <div className='text-light'>help</div>
        </div>
      </div>

      <div style={{borderTop:"1px solid gray", backgroundColor:"#001a33", gap:"150px"}} className='py-5 d-flex justify-content-center'>
        <div className='text-white'>EComm.in</div>

        <div className='d-flex justify-content-between' style={{gap:"20px"}}>
          <button className='btn btn-outline-secondary rounded-1 text-white d-flex justify-content-between align-items-center'><CiGlobe /> English <PiCaretUpDownFill /></button>

          <button className='btn btn-outline-secondary rounded-1 text-white d-flex justify-content-between align-items-center'><img src={indiaflag} style={{width:"25px", height:"19px", marginRight:"4px"}}></img> India</button>
        </div>
      </div>
    </div>
  )
}

export default Footer1