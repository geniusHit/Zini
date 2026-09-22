import React, { useContext, useEffect } from 'react'
import Carousel from '../Components/Carousel'
import Objects1 from '../Components/Objects1'
import Kitchen from '../Components/Kitchen'
import Nav2 from '../Components/Nav2'
import { useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer1 from '../Components/Footer1'
import Axios from 'axios'
import Footer2 from '../Components/Footer2'

const Home = (logout) => {
  const location = useLocation()
  let user = {
    name: "", mobile: 0
  };
  if (location.state) {
    user.name = location.state.name
    user.mobile = location.state.mobile
  }

  if (logout && logout.logout == "true") {
    location.state = null;
  }

  useEffect(() => {
    console.log("location.state from home : ", location.state)
    if (location.state?.buy && location.state?.phone) {
      location.state.buy = { ...location.state.buy, userPhone: location.state.phone, userName: location.state.name }
    }
  }, [location])

  return (
    <div style={{ backgroundColor: "#e8e8e8" }}>
      <Navbar name={user.name} mobile={user.mobile} />
      <Nav2 />
      <Carousel />
      <Objects1 />
      <Kitchen />
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Home