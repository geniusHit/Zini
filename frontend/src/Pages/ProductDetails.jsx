import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Nav2 from '../Components/Nav2'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const ProductDetails = () => {
    const API_URL =
        window.location.hostname === "localhost"
            ? "http://localhost:8011"
            : "https://zini-backend.vercel.app";

    const location = useLocation()
    const bigImg = useRef()

    const link = useNavigate()

    console.log("location.state.current_product : ", location.state.current_product)
    const product = location.state.current_product
    let today = new Date()
    let future = new Date(today)
    future.setDate(today.getDate() + 2)
    let date = future.getDate()
    let day = future.getDay()
    let month = future.getMonth()

    switch (day) {
        case 0: day = "Sunday"
            break;
        case 1: day = "Monday"
            break;
        case 2: day = "Tuesday"
            break;
        case 3: day = "Wednesday"
            break;
        case 4: day = "Thursday"
            break;
        case 5: day = "Friday"
            break;
        case 6: day = "Saturday"
            break;
    }

    switch (month) {
        case 0: month = "Jan"
            break;
        case 1: month = "Feb"
            break;
        case 2: month = "Mar"
            break;
        case 3: month = "Apr"
            break;
        case 4: month = "May"
            break;
        case 5: month = "June"
            break;
        case 6: month = "July"
            break;
        case 7: month = "August"
            break;
        case 8: month = "Sep"
            break;
        case 9: month = "Oct"
            break;
        case 10: month = "Nov"
            break;
        case 11: month = "Dec"
            break;
    }

    const [cart, setCart] = useState()
    const addToCart = async (id) => {
        if (location && location.state.name) {
            setCart({ email: location.state.email, product_id: id })
            console.log("cart = ", cart)
        }
        else {
            link("/signin", { state: { ...location.state, product_id: id } })
        }
    }

    useEffect(() => {
        const myfun = async () => {
            if (cart != undefined) {
                console.log("Cart = ", cart)
                await Axios.post(`${API_URL}/addtocart`, cart)
                alert("Product added to cart")
            }
        }
        myfun()
    }, [cart])

    const changeImg = (i) => {
        bigImg.current.src = i
    }

    const [buyData, setBuyData] = useState({
        userPhone: null,
        userName: null,
        productsId: null,
        date: null
    })
    const buyNow = async (id) => {
        const date = new Date()
        if (location?.state?.email) {
            setBuyData({ email: location.state.email, userName: location.state.name, productsId: id, date: date })
        }
        else {
            setBuyData({ ...buyData, productsId: id, date: date })
        }
    }
    useEffect(() => {
        const b = async () => {
            if (buyData.userPhone != null) {
                await Axios.post(`${API_URL}/buy`, buyData)
                alert("Request sent for buy.")
            }
            else if (buyData.userPhone == null && buyData.productsId != null) {
                link("/signin", { state: { ...location.state, buy: buyData } })
            }
        }
        b()
    }, [buyData])

    return (
        <div>
            <Navbar />
            <Nav2 />

            <div style={{ gap: "20px", margin: "auto" }} className='d-flex border p-4'>
                <div className='d-flex flex-column align-items-center justify-content-center' style={{ gap: "20px" }}>
                    {
                        product.img.map((i, index) => {
                            return (
                                <img key={index} src={i} className='border rounded-1' style={{ width: "40px", height: "40px" }} onClick={() => changeImg(i)}></img>
                            )
                        })
                    }
                </div>

                <div style={{ flexBasis: "30%" }} className='bg-light d-flex justify-content-center align-items-center'>
                    <img src={location.state.current_product.img[0]} ref={bigImg} className='w-100' style={{ mixBlendMode: "multiply" }}></img>
                </div>

                <div style={{ flexBasis: "70%" }} className='py-3 px-2'>
                    <div className='fs-5 fw-bold'>{location.state.current_product.title}</div>

                    <div>Rating:{location.state.current_product.rating}</div>

                    <div className='text-secondary'><span className=''>{location.state.current_product.bought != "" && location.state.current_product.bought + "+ bought in last month"}</span></div>

                    <div>
                        <span><sup>₹</sup></span>
                        <span className='fs-3'>{location.state.current_product.price}</span>
                        <span className='ms-2 text-secondary' style={{ fontSize: "10pt" }}>M.R.P:</span>
                        <span style={{ textDecoration: "line-through", fontSize: "10pt" }} className='text-secondary'>{location.state.current_product.oldPrice}</span>
                        <span className='ms-2'>({location.state.current_product.discount} off)</span>
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

                    <div>
                        <p className='fw-semibold fs-5 my-1'>Product Details</p>
                        <p>{product.details}</p>
                    </div>

                    <div>
                        <p className='fw-semibold fs-5 my-1'>About this Item</p>
                        <p>{product.about}</p>
                    </div>

                    <div className='d-flex'><button className='bg-warning rounded-5 px-3 py-1 border-0 my-2' onClick={() => addToCart(location.state.current_product._id)}>Add to cart</button></div>

                    <div className='d-flex'><button className='rounded-5 px-3 py-1 border-0 my-2' style={{ backgroundColor: "orange" }} onClick={() => buyNow(location.state.current_product._id)}>Buy Now</button></div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails