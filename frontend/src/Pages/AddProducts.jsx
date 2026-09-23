import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../Components/Navbar'
import Axios from 'axios'

const AddProducts = () => {
  const API_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:8011"
      : "https://zini-backend.vercel.app";

  const myform = useRef()

  const [productData, setProductData] = useState({
    img: "",
    category: "",
    title: "",
    rating: "",
    bought: "",
    discount: "",
    price: "",
    oldPrice: "",
    emi: "",
    about: "",
    details: ""
  })

  const handleChange = (e) => {
    if (e.target.name == "img") {
      let images = e.target.files
      let images2 = []
      for (let i = 0; i < images.length; i++) {
        images2.push(`../../public/${e.target.files[i].name}`)
      }
      setProductData({
        ...productData, [e.target.name]: images2
      })
    }
    else {
      setProductData({
        ...productData, [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await fetch(`${API_URL}/uploadproduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(productData)
      })
      alert("Product added")
    }
    catch (error) {
      console.log(error)
    }

    myform.current.reset()
  }

  return (
    <div>
      <Navbar />

      <div className='mx-auto p-4' style={{ width: "30%" }}>
        <form onSubmit={handleSubmit} ref={myform}>
          <div className="mb-3 d-flex flex-column gap-3">
            <input multiple className="form-control" onChange={handleChange} name='img' style={{ height: "40px" }} type="file" id="formFile"></input>

            <input type='text' className='form-control ' onChange={handleChange} style={{ height: "40px" }} placeholder='Title' name='title'></input>

            <div className='d-flex align-items-center'>
              <select className='rounded-2 px-1 py-2 bg-light text-secondary text-capitalize' name='category' onChange={handleChange} style={{ height: "40px", width: "100%" }}>
                <option value="category">Category</option>
                <option value="appliances">appliances</option>
                <option value="apps & games">apps & games</option>
                <option value="audible audiobooks">audible audiobooks</option>
                <option value="baby">baby</option>
                <option value="beauty">beauty</option>
                <option value="books">books</option>
                <option value="car & motorbike">car & motorbike</option>
                <option value="clothing & accessories">clothing & accessories</option>
                <option value="collectibles">collectibles</option>
                <option value="computer & accessories">computer & accessories</option>
                <option value="deals">deals</option>
                <option value="electronics">Electronics</option>
                <option value="furniture">furniture</option>
                <option value="kitchen">kitchen</option>
                <option value="garden & outdoors">garden & outdoors</option>
                <option value="gift cards">gift cards</option>
                <option value="grocery & gourmet foods">grocery & gourmet foods</option>
              </select>
            </div>
            <input type='text' className='form-control ' onChange={handleChange} style={{ height: "40px" }} placeholder='Rating' name='rating'></input>
            <input type='text' className='form-control ' onChange={handleChange} style={{ height: "40px" }} placeholder='No. of Bought in past month' name='bought'></input>
            <input type='text' className='form-control ' onChange={handleChange} style={{ height: "40px" }} placeholder='Discount Percentage' name='discount'></input>
            <input type='text' className='form-control ' onChange={handleChange} style={{ height: "40px" }} placeholder='Price' name='price'></input>
            <input type='text' className='form-control ' onChange={handleChange} style={{ height: "40px" }} placeholder='Old Price' name='oldPrice'></input>
            <input type='text' className='form-control ' onChange={handleChange} style={{ height: "40px" }} placeholder='Emi Details' name='emi'></input>
            <input type='text' className='form-control ' onChange={handleChange} style={{ height: "40px" }} placeholder='About' name='about'></input>
            <input type='text' placeholder='Details' onChange={handleChange} name='details' className='form-control' style={{ height: "40px" }}></input>

            <input type='submit' value="Add Product" className='btn btn-warning'></input>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProducts