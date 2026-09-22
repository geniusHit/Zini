import React, {useState, useRef, useEffect} from 'react'
import { IoSearch } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Axios from 'axios'

const Navbar = (user) => {
  const API_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:8011"
      : "https://zini-backend.vercel.app";

  const location=useLocation()
  const [visibility, setVisibility]=useState(null)
  const [lState, setLState]=useState()
  const accountMenu=useRef()
  const showMenu=()=>{
    setVisibility(true)
  }
  const hideMenu=(e)=>{
    if(accountMenu.current && !accountMenu.current.contains(e.target))
      setVisibility(false)
  }
  document.addEventListener("click", hideMenu)

  const link=useNavigate()
  const [search, setSearch]=useState()
  const searchChange=(e)=>{
    setSearch(e.target.value)
    console.log("search = ", search)
  }

  const [data,setData]=useState([])
  const showSearch=async ()=>{
    console.log("search from showSearch = ", search)
    if(search!=undefined)
    {
      const products=await Axios.get(`${API_URL}/showsearch/${search}`)
      setData(products.data)
    }
  }
  useEffect(()=>{
    console.log("data from Navbar = ", data)
    if(data.length>0)
      link("/products", {state : {...location.state, search:search, products:data }})
  }, [data])

  useEffect(()=>{
    setLState(location.state)
    console.log("location.state : ", location.state)
  }, [location])

  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState([]);

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

            // Fetch product details for all items in the cart
            const productPromises = result.data.map((item) =>
              Axios.get(`${API_URL}/getproduct/${item.product_id}`)
            );
            const productResults = await Promise.all(productPromises);
            setProducts(productResults.map((res) => res.data));
          } catch (error) {
            console.error("Error fetching cart or product data:", error);
          }
        }
      }
    };

    fetchCartData();
  }, [location, lState, products]);

  useEffect(()=>{
    console.log("search = ", search)
    showSearch()
  }, [search])

  return (
    <div style={{minWidth:"1350px", position:"sticky", top:"0px", zIndex:"3"}}>
      <nav style={{boxSizing:"border-box", backgroundColor:"#000d1a"}} className='d-flex justify-content-evenly py-2'>
        <div className='text-white d-flex align-items-center text-danger-hover out'>
          <NavLink to="/" state={{...location.state}} style={{textDecoration:"none"}}><span className='fs-4 fw-bold' style={{textDecoration:"none", color:"white"}}>zini</span> <span className='mt-1' style={{textDecoration:"none", color:"white"}}>.in</span></NavLink>
        </div>

        <div className='d-flex align-items-center'>
          <select className='rounded-start-2 px-1 py-2 bg-light text-secondary text-capitalize' style={{height:"40px", width:"80px"}} onChange={(e)=>{
            let s=e.target.value;
            s=s.replace(" ", ",")
            setSearch(s)
            console.log("search from select = ", search)
            showSearch()
          }}>
            <option value="All">All</option>
            <option value="Alexa Skills">Alexa Skills</option>
            <option value="Amazon Devices">Amazon Devices</option>
            <option value="amazon fashion">amazon fashion</option>
            <option value="amazon fresh">amazon fresh</option>
            <option value="amazon pharmacy">amazon pharmacy</option>
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
            <option value="Electronics">Electronics</option>
            <option value="furniture">furniture</option>
            <option value="garden & outdoors">garden & outdoors</option>
            <option value="gift cards">gift cards</option>
            <option value="grocery & gourmet foods">grocery & gourmet foods</option>
          </select>
          <input type='text' className='py-2 navSearch' onChange={searchChange} style={{height:"40px", width:"40vw"}} placeholder='Search Zini.in'></input>
          <button className='px-3 rounded-end-2 d-flex justify-content-center align-items-center' style={{backgroundColor:"#fcce51", height:"40px", border:"none"}} onClick={showSearch}><IoSearch className='fs-4'/></button>
        </div>

        <div className='text-white out' onMouseEnter={showMenu}>
          <div style={{fontSize:"10pt", color:"white"}}>Hello {location?.state?.name? location.state.name : "Sign In" }</div>
          <div style={{fontSize:"11pt"}} className='fw-bold'>Account & Lists ▼</div>

          {
            visibility==true &&
            <div className='bg-light d-flex flex-column p-2' style={{position:"absolute", marginLeft:"0px", marginTop:"10px"}}>
              <div class="triangle-up" ref={accountMenu} style={{position:"absolute", marginTop:"-17px", zIndex:"4"}}></div>

              <h6 className='fw-bold text-black'>Your Account</h6>

              <div className='text-secondary lh-3' style={{fontSize:"11pt"}}>
                {location?.state?.name? 
                <NavLink to="/" onClick={()=>window.location.reload()} logout="true" className="text-secondary text-decoration-none"><div>Logout</div></NavLink>
                :
                <div>
                  <NavLink to="/signin" className="text-secondary text-decoration-none"><div>Signin</div></NavLink>

                  <NavLink to="/signup" className="text-secondary text-decoration-none">Signup</NavLink>
                </div>}

                <div>Switch Account</div>
                <div>Your Account</div>
                <NavLink to="/cart" className="text-decoration-none text-secondary"><div>Your Orders</div></NavLink>
              </div>
            </div>
          }
        </div>

        <NavLink to="/cart" className="text-decoration-none" state={{...location.state}}>
          <div className='out text-white fs-1 d-flex align-items-center'>
            <CiShoppingCart />
            <span className='text-awhite text-center' style={{position:"absolute", fontSize:"9pt", marginLeft:"19px"}}>{products.length}</span>
            <span className='' style={{fontSize:"13pt"}}>Cart</span>
          </div>
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar