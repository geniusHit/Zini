import React, {useEffect, useRef, useState} from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import Axios from 'axios'

const Nav2 = () => {
  const sideMenu=useRef()
  const close=()=>{
    sideMenu.current.style.left="-400px"
    sideMenu.current.style.transition = "left 0.2s ease-out";
  }

  const open=()=>{
    sideMenu.current.style.left="0px"
    sideMenu.current.style.transition = "left 0.2s ease-out";
  }

  const location=useLocation()
  const [data,setData]=useState()
  const [search, setSearch]=useState()
  const showSearch=async (e)=>{
    setSearch(e.currentTarget.id)
    console.log("e.currentTarget.id = ", e.currentTarget.id)
    const products=await Axios.get(`http://localhost:8011/showsearch/${e.currentTarget.id}`)
    setData(products.data)
  }
  const link=useNavigate()

  useEffect(()=>{
    if(data!=undefined && search!=undefined)
    {
      link("/products", {state:{...location.state, search:search, products:data}})
    }
  }, [data])

  const [products2, setProducts2]=useState()
  const [search2, setSearch2]=useState()
  const searchProducts=async (search)=>{
    const result=await Axios.get(`http://localhost:8011/showsearch/${search}`)
    setSearch2(search)
    setProducts2(result.data)
  }

  useEffect(()=>{
    console.log("products2 from nav2 = ", products2)
    if(products2!=undefined)
    {
      link("/products", {state:{...location.state, search:search2, products:products2}})
    }
  }, [products2])

  return (
    <div style={{minWidth:"1350px"}}>
      <nav className='text-white' style={{backgroundColor:"#001a33"}}>
        <div className='ms-3 py-1 d-flex align-items-center fw-semibold justify-content-start text-capitalize' style={{fontSize:"12pt"}}>
            <div className='d-flex align-items-center out px-2 py-1' onClick={open} style={{height:"30px", cursor:"pointer"}}><IoIosMenu /><span>All</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px", cursor:"pointer"}} onClick={showSearch} id="fresh"><span>Fresh</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px", cursor:"pointer"}} onClick={showSearch} id="bestSellers"><span>Best Sellers</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px", cursor:"pointer"}} onClick={showSearch} id="todaysDeals"><span>Today's Deals</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px", cursor:"pointer"}} onClick={showSearch} id="phone"><span>Phone</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px", cursor:"pointer"}} onClick={showSearch} id="electronics"><span>Electronics</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px", cursor:"pointer"}} onClick={showSearch} id="home,kitchen"><span>Home & Kitchen</span></div>
        </div>
      </nav>

      <div ref={sideMenu} className='d-flex justify-content-between' style={{width:"400px", minHeight:"100%", height:"100%", position:"fixed", zIndex:"4", transition:"none", left:"-400px"}}>
        <div className='' style={{width:"350px", minHeight:"100%", height:"100%", position:"fixed", zIndex:"4", top:"0", overflowY:"auto"}}>
          <div className='text-white px-5 py-3 d-flex align-items-center fs-5 fw-bold' style={{backgroundColor:"#001a33", height:"60px"}}><FaRegCircleUser className='me-3'/> Hello, {
            location?.state?.name!=undefined? <span>{location.state.name}</span> : <span>Signin</span>
          }</div>

          <div className='bg-white' style={{height:"calc(100% - 60px)"}}>
            <div className='px-5 py-4 border-bottom  text-capitalize bg-white'>
              <h5 className='fw-bold mb-4'>Trending</h5>
              <p className='fw-semibold' style={{cursor:"pointer"}} onClick={()=>searchProducts("Best,sellers")}>Best sellers</p>

              <p className='fw-semibold' style={{cursor:"pointer"}} onClick={()=>searchProducts("New,Releases")}>New releases</p>
            </div>

            <div className='px-5 py-4 border-bottom text-capitalize bg-white'>
              <h5 className='fw-bold mb-4'>shop by category</h5>
              <p className='fw-semibold' style={{cursor:"pointer"}} onClick={()=>searchProducts("mobiles,computers")}>mobiles, computers</p>

              <p className='fw-semibold' style={{cursor:"pointer"}} onClick={()=>searchProducts("TV,appliances,Electronics")}>TV, appliances, Electronics</p>

              <p className='fw-semibold' style={{cursor:"pointer"}} onClick={()=>searchProducts("men's,fashion")}>men's fashion</p>

              <p className='fw-semibold' style={{cursor:"pointer"}} onClick={()=>searchProducts("women's,fashion")}>women's fashion</p>

              <div class="accordion-item">

              <h2 class="accordion-header">
                <button class="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  See More <FaChevronDown className='ms-2'/>
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body py-3">
                  <p className='fw-semibold' style={{cursor:"pointer"}} onClick={()=>searchProducts("Home,Kitchen,Pets")}>Home, Kitchen, Pets</p>

                  <p className='fw-semibold' style={{cursor:"pointer"}} onClick={()=>searchProducts("Beauty,Health,Grocery")}>Beauty, Health, Grocery</p>

                  <p className='fw-semibold' style={{cursor:"pointer"}} onClick={()=>searchProducts("Sports,Fitness,Bags,Luggage")}>Sports, Fitness, Bags, Luggage</p>

                  <p className='fw-semibold' style={{cursor:"pointer"}} onClick={()=>searchProducts("Toys,BabyProducts,Kid'sFashion")}>Toys, Baby Products, Kid's Fashion</p>

                  <p className='fw-semibold' style={{cursor:"pointer"}} onClick={()=>searchProducts("Car,Motorbike,Industrial")}>Car, Motorbike, Industrial</p>

                  <p className='fw-semibold' style={{cursor:"pointer"}} onClick={()=>searchProducts("Books")}>Books</p>
                </div>
              </div>
            </div>
            </div>

            <div className='px-5 py-4 border-bottom text-capitalize bg-white'>
              <h5 className='fw-bold mb-4'>help & settings</h5>

              {location?.state?.mobile!=undefined ?
              <div>
                <NavLink to="/youraccount" state={{...location.state}} className="text-decoration-none text-black"><p className='fw-semibold'>your account</p></NavLink>
                <p className='fw-semibold'>Sign out</p>
              </div>
              :
              <div>
                <NavLink to="/signin" state={{...location.state}} style={{textDecoration:"none", color:"black"}}><p className='fw-semibold'>sign in</p></NavLink>

                <NavLink to="/signup" state={{...location.state}} style={{textDecoration:"none", color:"black"}}><p className='fw-semibold'>sign up</p></NavLink>
              </div>}

              <NavLink to="/admin" style={{textDecoration:"none", color:"black"}}><p className='fw-semibold'>Admin</p></NavLink>
            </div>
          </div>
        </div>

        <div onClick={close} style={{position:"absolute", right:0, width:"50px", top:-102}} className='px-3 py-3 text-black btn border-1 border d-flex justify-content-center align-items-center'>
          <RxCross1 className='fs-4 text-white fw-bold rounded-1'/>
        </div>
      </div>
    </div>
  )
}

export default Nav2