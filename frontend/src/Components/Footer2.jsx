import React from 'react'

const Footer2 = () => {
  return (
    <div style={{ backgroundColor:"#000d1a", gap:"20px", minWidth:"1350px"}} className='d-flex align-items-center py-4 flex-column'>
      <div className='d-grid text-light w-50 text-capitalize row gy-3 justify-items-center justify-content-between' style={{gridTemplateColumns:"15% 15% 15% 15%", fontSize:"9pt"}}>
        <div style={{}} className='hover-underline d-flex flex-column'>
            <span className='fw-bold'>AbeBooks</span>
            <span>Books, art</span>
            <span>& collectibles</span>
        </div>

        <div style={{}} className='hover-underline d-flex flex-column'>
            <span className='fw-bold'>Zini web services</span>
            <span>scalable, cloud</span>
            <span>computing services</span>
        </div>

        <div style={{}} className='hover-underline d-flex flex-column'>
            <span className='fw-bold'>audible</span>
            <span>download</span>
            <span>audio books</span>
        </div>

        <div style={{}} className='hover-underline d-flex flex-column'>
            <span className='fw-bold'>IMDb</span>
            <span>movies, TV</span>
            <span>& celebrities</span>
        </div>

        <div style={{}} className='hover-underline d-flex flex-column'>
            <span className='fw-bold'>shopbop</span>
            <span>designer</span>
            <span>fashion brands</span>
        </div>

        <div style={{}} className='hover-underline d-flex flex-column'>
            <span className='fw-bold'>Zini business</span>
            <span>everything for</span>
            <span>your business</span>
        </div>

        <div style={{}} className='hover-underline d-flex flex-column'>
            <span className='fw-bold'>prime now</span>
            <span>2-hour delivery</span>
            <span>on everyday items</span>
        </div>

        <div style={{}} className='hover-underline d-flex flex-column'>
            <span className='fw-bold'>Zini prime music</span>
            <span>100 million songs, ad-free</span>
            <span>over 15 million podcast episodes</span>
        </div>
      </div>

      <div className='text-light text-capitalize fw-semibold d-flex flex-column justify-content-center align-items-center' style={{fontSize:"9pt"}}>
        <div className='d-flex justify-content-between align-items-center' style={{gap:"25px"}}>
            <span>conditions of use & sale</span>
            <span>privacy notice</span>
            <span>interest-based ads</span>
        </div>

        <div>
            © 1996-2024, Zini.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  )
}

export default Footer2