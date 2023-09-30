import "./cart.css";
import { useContext } from 'react';
import StoreContext from "../state/storeContext";
import CartProduct from "../components/cartProduct";

function Cart(){
    let cart = useContext(StoreContext).cart;
    
    return(
        <div className="cart-container">
        <div className="cart page">
            <h1>Cart</h1>
            <h3>Insert card or select payment type</h3>
            <h3>You have ({cart.length}) product's in your cart.</h3>

            <div className="prod-list">
            {cart.map((prod) => <CartProduct key={prod._id} data={prod} />)}
            </div>
        <button type = "button" className="btn btn-success clear-button">Clear Cart</button>
        </div>
        </div>
    );
}

export default Cart;