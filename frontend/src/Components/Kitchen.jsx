import React, { useState, useRef, useEffect } from 'react'
import KitchenApi from '../Pages/KitchenApi'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate, useLocation } from 'react-router-dom'
import Axios from 'axios'

const Kitchen = () => {
  const slider = useRef()
  const left = useRef()
  const right = useRef()

  const leftScroll = () => {
    //slider.current.scrollLeft-=100
    if (slider.current) {
      slider.current.scrollTo({
        left: slider.current.scrollLeft - 500,
        behavior: 'smooth', // Enable smooth scrolling
      });
      left.current.style.outline = "2px solid black"
    }
  }

  const rightScroll = () => {
    //slider.current.scrollLeft+=100
    if (slider.current) {
      slider.current.scrollTo({
        left: slider.current.scrollLeft + 500,
        behavior: 'smooth', // Enable smooth scrolling
      });
      right.current.style.outline = "2px solid black"
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (left.current && !left.current.contains(e.target)) {
        left.current.style.outline = "none"
      }
      if (right.current && !right.current.contains(e.target)) {
        right.current.style.outline = "none"
      }
    })
  }, [])

  const location = useLocation()
  const [search, setSearch] = useState()
  const link = useNavigate()
  const searchChange = (e) => {
    setSearch(e.target.value)
    console.log("search = ", search)
  }
  const [data, setData] = useState([])
  const showProducts = async (p) => {
    let s = p.replaceAll(" ", ",")
    setSearch(s)
    const products = await Axios.get(`http://localhost:8011/showsearch/${s}`)
    setData(products.data)
  }
  useEffect(() => {
    console.log("data from Navbar = ", data)
    if (data.length > 0)
      link("/products", { state: { ...location.state, search: search, products: data } })
  }, [data])

  return (
    <div className='d-flex justify-content-center my-3' style={{ width: "100%", minWidth: "1350px", backgroundColor: "#e8e8e8" }}>
      <div className='mt-4 mb-4 mx-4 py-4 bg-white' style={{ width: "97%", margin: "auto", overflow: "hidden", position: "relative" }} onClick={()=>showProducts("kitchen")}>
        <button className='d-flex kitchenbtn justify-content-center align-items-center bg-secondary-emphasis px-2 py-3' style={{ border: "none", height: "100px", boxSizing: "border-box", position: "absolute", borderTopRightRadius: "3px", borderBottomRightRadius: "3px", top: "calc(50% - 50px)" }} ref={left} onClick={leftScroll}><FaChevronLeft /></button>

        <div className='fs-5 fw-bold mb-3 px-4'>Best Sellers in Home & Kitchen</div>

        <div className='d-flex justify-content-center'>

          <div className='d-flex px-4 justify-content-center bg-white' ref={slider} style={{ minWidth: "1350px", boxSizing: "border-box", width: "91.5%", overflowX: "hidden", gap: "20px" }}>
            {
              KitchenApi.map((k, index) => {
                return (
                  <div className="float-start" key={index}>
                    <img src={k} width="150px" height="200px"></img>
                  </div>
                )
              })
            }
          </div>
        </div>

        <button className='d-flex kitchenbtn justify-content-center align-items-center bg-secondary-emphasis px-2 py-3' style={{ border: "none", right: "0", height: "100px", boxSizing: "border-box", position: "absolute", borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px", top: "calc(50% - 50px)" }} ref={right} onClick={rightScroll}><FaChevronRight /></button>
      </div>
    </div>
  )
}

export default Kitchen