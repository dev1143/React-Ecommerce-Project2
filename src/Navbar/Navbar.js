import React,{useState,useEffect} from 'react'
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {Logout} from "../AuthUser/Authaction";

export default function Navbar1() {
    const cart = useSelector(state => state.shopData.cart)

    const auth=useSelector(state =>state.authData)
    const booly=auth.authentiCated
    console.log("BOOLEAN",booly);
    const name=auth.login.full_name
    console.log("HELLO",auth);

    const history=useHistory()
    const dispatch=useDispatch()

    const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  const loggingOut=()=>{
    dispatch(Logout())
    history.push('/')
    console.log("BOOLY OUT",booly);
  }

    return (
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">

        <Navbar.Brand href="#home"><Link to="/">React-Bootstrap</Link></Navbar.Brand>
        {auth.authentiCated  ? (<Nav.Link href="#link">{name}</Nav.Link>)  : null}

        {auth.authentiCated ? (<Nav.Link href="#link" onClick={loggingOut}>Log Out</Nav.Link> ) : null}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link href="#"><Link to="/product/category"><h3>Products</h3></Link></Nav.Link>

        
        
        <Nav.Link href="#home"><Link to="/cart">
        
        <div style={{display:"flex"}}>
        <i class="fas fa-cart-plus"></i>
        <div><h4>Cart{cartCount}</h4></div>    
        </div>
        
        </Link></Nav.Link>

        </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
    )
}
