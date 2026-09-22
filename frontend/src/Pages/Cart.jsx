import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer1 from '../Components/Footer1';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';

const Cart = () => {
  const API_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:8011"
      : "https://zini-backend.vercel.app";

  const [lState, setLState] = useState();
  const location = useLocation();
  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice]=useState()
  let price=0;

  useEffect(() => {
    const fetchCartData = async () => {
      if (location && location.state) {
        setLState(location.state);

        /*
            lState?.mobile:
            This means "try to access the mobile property of lState, but only if lState is not null or undefined."

            If lState is null or undefined, lState?.mobile will return undefined instead of throwing an error.
        */
        if (lState?.email) {
          try {
            const result = await Axios.get(
              `${API_URL}/getcartinfo/${lState.email}`
            );
            setCartData(result.data);
            setBuyProducts({email:location.state.email, userName:location.state.name})

            // Fetch product details for all items in the cart
            const productPromises = result.data.map((item) =>
              Axios.get(`${API_URL}/getproduct/${item.product_id}`)
            );
            const productResults = await Promise.all(productPromises);
            setProducts(productResults.map((res) => res.data));
            console.log("products from cart = ", products)
          } catch (error) {
            console.error("Error fetching cart or product data:", error);
          }
        }
      }
    };

    fetchCartData();
  }, [location, lState]);

  useEffect(()=>{
    console.log("Cart data : ", cartData)
  }, [cartData])

  const [buyProducts, setBuyProducts]=useState();
  const buy=async ()=>{
    const date=new Date()
    setBuyProducts({email:location.state.email, userName:location.state.name})
    let p_ids=[];
    products.map((p, index)=>{
      p_ids.push(p)
    })
    setBuyProducts({...buyProducts, productsId:p_ids, date:date})
  }
  useEffect(()=>{
    const myfun=async()=>{
      const result = await Axios.post(`${API_URL}/buy`, buyProducts)
      console.log("buyProducts = ", buyProducts)
      alert("Request sent for buy")
    }
    if(buyProducts?.productsId!=undefined)
    {
      myfun()
    }
  }, [buyProducts])

  return (
    <div className="w-100" style={{minWidth:"1350px", backgroundColor: "#e8e8e8" }}>
      <Navbar />

      <div className='d-flex w-100'>
        <div style={{ width: "75%", display:"inline-block" }} className="m-3 bg-white p-3">
            <h4>Shopping Cart</h4>
            <hr className="w-100 border"></hr>
            {cartData.length > 0 ? (
            cartData.map((cartItem, index) => {
                const product = products[index];
                return (
                product && (
                    <div
                    key={index}
                    style={{ flexBasis: "30%", gap: "20px" }}
                    className="d-flex my-3"
                    >
                    <div
                        style={{ flexBasis: "30%" }}
                        className="bg-light d-flex justify-content-center align-items-center"
                    >
                        <img
                        src={product.img[0]}
                        className="w-100"
                        style={{ mixBlendMode: "multiply" }}
                        alt="Product"
                        />
                    </div>

                    <div style={{ flexBasis: "70%" }} className="py-3">
                        <div className="fs-5 fw-bold">{product.title}</div>

                        <div>Rating: {product.rating}</div>

                        <div className="text-secondary">
                        {product.bought}+ in last month
                        </div>

                        <div>
                        <span>
                            <sup>₹</sup>
                        </span>
                        <span className="fs-3">{product.price}</span>
                        
                        <span className="ms-2">({product.discount} off)</span>
                        </div>
                    </div>
                    </div>
                )
                );
            })
            ) : (
            <h5>Cart is Empty</h5>
            )}
        </div>

        <div style={{width:"25%", height:"300px"}} className='m-3 px-4 py-3 bg-white'>
            <span className='fs-5'>Subtotal ({products.length} items) : {
                products.map((p)=>{
                    let temp=p.price
                    console.log("temp = " , temp)
                    temp=temp.replace(",", "")
                    console.log("temp replace : ", temp)
                    temp=parseInt(temp)
                    console.log("temp num : ", temp)
                    console.log("price = ", price)
                    price+=temp
                    console.log("price total = ", price)
                    {setTimeout(()=>{
                        console.log("Products = ", products)
                        setTotalPrice(price)
                    }, 100)}
                })
        }</span><sup style={{fontSize:"10pt"}}>₹</sup><span className='fw-bold fs-5'>{totalPrice}</span>
        <br/>
        <button className='bg-warning rounded-5 w-100 border-0 my-3 py-2' onClick={buy}>Proceed to Buy</button>
        </div>
      </div>
      <Footer1 />
    </div>
  );
};

export default Cart;