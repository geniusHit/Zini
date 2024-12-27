import React from 'react'
import './bootstrap.min.css'
import './index.css'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import AdminSignin from './Pages/AdminSignin'
import AdminPage from './Pages/AdminPage'
import Signin from './Pages/Signin'
import AddProducts from './Pages/AddProducts'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import YourAccount from './Pages/YourAccount'
import ProductDetails from './Pages/ProductDetails'
import CheckingOTP from './Pages/CheckingOTP'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/admin' element={<AdminSignin/>}></Route>
        <Route path='/adminpage' element={<AdminPage/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/addproducts' element={<AddProducts/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/youraccount' element={<YourAccount/>}></Route>
        <Route path='/productdetails' element={<ProductDetails/>}></Route>
        <Route path='/checkotp' element={<CheckingOTP/>}></Route>
      </Routes>
    </div>
  )
}

export default App