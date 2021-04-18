import React,{useEffect,useState} from 'react'
import {useSelector} from "react-redux"
import CartItem from "./CartItem";
import {useHistory} from "react-router-dom";
import {Container,Button} from "react-bootstrap";
import styles from "./Cart.module.css";


export default function Cart() {
    const cart = useSelector(state => state.shopData.cart)

    const auth=useSelector(state => state.authData.authentiCated)

    const history=useHistory()
    
    console.log("ADDED CART ITEM",cart);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
  
    useEffect(() => {
      let items = 0;
      let price = 0;
  
      cart.forEach((item) => {
        items += item.qty;
        price += item.qty * item.price;
      });
  
      setTotalItems(items);
      setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

        const switchHandler=()=>{
                if(auth === false){
                    history.push('/login')
                }
                else{
                    history.push('/address')
                }
        }      
        
    return (
        <div className={styles.cart}>
            <Container>
            
            {/* <h1>this is Cart Component</h1> */}
            <div className={styles.cart__items}>
            {   
                cart.map((item)=>(
                   <CartItem key={item.id} item={item}/>
                ))
            }
            </div>
            <div className={styles.cart__summary}>
            
            <h4 className={styles.summary__title}>Cart Summary</h4>
            <div className={styles.summary__price}>
                <span><b>TOTAL :</b>({totalItems} items)</span>
                <span>$ {totalPrice}</span>
            </div>
            <Button variant="outline-secondary" onClick={switchHandler}>Proceed To Checkout</Button>
            </div> 
            </Container>
        </div>
    )
}


// const handler=(itemId)=>{
//     dispatch(removeFromCart(itemId))
// }