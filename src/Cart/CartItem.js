import React,{useState} from 'react'
import {Button} from "react-bootstrap";
import {removeFromCart} from "../Shopping/ShoppingAction";
import {adjustquantity} from "../Shopping/ShoppingAction";
import {useDispatch} from "react-redux";
// import {Row,Col} from "react-bootstrap";
import styles from "./CartItem.module.css";

export default function CartItem({item}) {
    const dispatch=useDispatch()
    // const state = useSelector(state => state.state)
    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        dispatch(adjustquantity(item.id, e.target.value));
      };

         const handler=(itemId)=>{
             dispatch(removeFromCart(itemId))
         }

         const style1={
            height:'100px',
            width:'100px'
         }

    return (
        <div class={styles.cartItem}>
                    
                    <img  alt="cannot render" className={styles.cartItem__image} src={item.image} />     
                    <div className={styles.cartItem__details}>
                    <p className={styles.details__title}>{item.title}</p>
                    <p className={styles.details__price}>
                    <b>PRICE : RS</b> {item.price}
                    </p>
                    </div>
                    <div className={styles.cartItem__actions}>
                        <div className={styles.cartItem__qty}>
                        <label htmlFor="qty">Qty</label>
                    <input min="1" type="number" id="qty" name="qty" value={input} onChange={onChangeHandler}/>
                        </div>
                    </div>
                    <Button style={style1} onClick={()=>handler(item.id)} variant="primary">DELETE</Button>
                        
                    
        </div>
    )
}
