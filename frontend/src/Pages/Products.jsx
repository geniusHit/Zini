import React, {useEffect, useState} from 'react'
import Navbar from '../Components/Navbar'
import Nav2 from '../Components/Nav2'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer1 from '../Components/Footer1'
import Footer2 from '../Components/Footer2'
import Axios from 'axios'

const Products = () => {
  const API_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:8011"
      : "https://zini-backend.vercel.app";

  const link=useNavigate()
  const location=useLocation()
  const [products, setProducts]=useState(null)
  useEffect(()=>{
    if(location.state && location.state.products)
    {
      setProducts(location.state.products)
      console.log("products from Products page : ", products)
    }
  }, [location])

  let today=new Date()
  let future=new Date(today)
  future.setDate(today.getDate()+2)
  let date=future.getDate()
  let day=future.getDay()
  let month=future.getMonth()

  switch(day)
  {
    case 0:day="Sunday"
    break;
    case 1:day="Monday"
    break;
    case 2:day="Tuesday"
    break;
    case 3:day="Wednesday"
    break;
    case 4:day="Thursday"
    break;
    case 5:day="Friday"
    break;
    case 6:day="Saturday"
    break;
  }

  switch(month)
  {
    case 0:month="Jan"
    break;
    case 1:month="Feb"
    break;
    case 2:month="Mar"
    break;
    case 3:month="Apr"
    break;
    case 4:month="May"
    break;
    case 5:month="June"
    break;
    case 6:month="July"
    break;
    case 7:month="August"
    break;
    case 8:month="Sep"
    break;
    case 9:month="Oct"
    break;
    case 10:month="Nov"
    break;
    case 11:month="Dec"
    break;
  }

  const [cart, setCart]=useState()
  const addToCart=async (id)=>{
    if(location && location.state.name)
    {
      setCart({email:location.state.email, product_id:id})
      console.log("cart = ", cart)
    }
    else{
      link("/signin", {state: {...location.state, product_id:id}})
    }
  }
  useEffect(()=>{
    const myfun = async ()=>{
      if(cart!=undefined)
      {
        console.log("Cart = " , cart)
        await Axios.post(`${API_URL}/addtocart`, cart)
        alert("Product added to cart")
      }
    }
    myfun()
  }, [cart])

  useEffect(()=>{
    console.log("location.state from Products page = ", location.state)
  }, [location])

  const [buyData, setBuyData]=useState({
    userPhone:null,
    userName:null,
    productsId:null,
    date:null
  })
  const buyNow=async (id)=>{
    const date=new Date()
    if(location?.state?.email)
    {
      setBuyData({email:location.state.email, userName:location.state.name, productsId:id, date:date})
    }
    else{
      setBuyData({...buyData, productsId:id, date:date})
    }
  }

  useEffect(()=>{
    const b=async ()=>{
      if(buyData.userPhone!=null)
      {
        await Axios.post(`${API_URL}/buy`, buyData)
        alert("Request sent for buy.")
      }
      else if(buyData.userPhone==null && buyData.productsId!=null)
      {
        link("/signin", {state:{...location.state, buy:buyData}})
      }
    }
    b()
  }, [buyData])

  return (
    <div className='' style={{minWidth:"1350px",}}>
      <Navbar/>
      <Nav2/>

      <div className='mt-4 d-grid flex-column gap-3 justify-content-center' style={{width:"90%", clear:"both", gridTemplateColumns:"20% 20% 20% 20%", margin:"auto"}}>
      {
        products!=null && products.map((p, index)=>{
          return (
            <div key={index} style={{flexBasis:"10%", gap:"20px", cursor:"pointer"}} onClick={()=>link("/productdetails", {state:{...location.state, current_product:p}})} className='d-flex flex-column border'>
              <div style={{flexBasis:"30%"}} className='bg-light d-flex justify-content-center align-items-center'>
                <img src={p.img[0]} className='w-100' style={{mixBlendMode:"multiply"}}></img>
              </div>

              <div style={{flexBasis:"70%"}} className='py-3 px-2'>
                <div className='fs-5 fw-bold'>{p.title.length>40?p.title.slice(0,40)+"..." : p.title}</div>

                <div>Rating:{p.rating}</div>

                <div className='text-secondary'><span className=''>{p.bought!="" && p.bought + "+ bought in last month"}</span></div>

                <div>
                  <span><sup>₹</sup></span>
                  <span className='fs-3'>{p.price}</span>
                  <span className='ms-2 text-secondary' style={{fontSize:"10pt"}}>M.R.P:</span>
                  <span style={{textDecoration:"line-through", fontSize:"10pt"}} className='text-secondary'>{p.oldPrice}</span>
                  <span className='ms-2'>({p.discount} off)</span>
                </div>

                <div>
                  FREE Delivery <span className='fw-bold'>{day}, {date} {month}</span>
                </div>

                <div>
                  Or fastest delivery <span className='fw-bold'>Tomorrow</span>
                </div>

                <div className='text-secondary'>
                  Service : Setup at delivery
                </div>

                <div className='d-flex justify-content-center'><button className='bg-warning rounded-5 px-3 py-1 border-0 my-2' onClick={()=>addToCart(p._id)}>Add to cart</button></div>

                <div className='d-flex justify-content-center'><button className='rounded-5 px-3 py-1 border-0 my-2' style={{backgroundColor:"orange"}} onClick={()=>buyNow(p._id)}>Buy Now</button></div>
              </div>
            </div>
          )
        })
      }
      </div>

      <Footer1/>
      <Footer2/>
    </div>
  )
}

export default Products