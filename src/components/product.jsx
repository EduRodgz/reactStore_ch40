import "./product.css";
import StoreContext from "../state/storeContext";
import QuantityPicker from "./quantityPicker";
import {useContext, useEffect, useState} from "react";

function Product(props){
    const [quantity, setQuantity] = useState(1);
    const addProductToCart = useContext(StoreContext).addProductToCart;
    
    useEffect(function(){
        console.log("component loaded");
    },[]);


    function onQuantityChange(value){
        setQuantity(value);
    }

    function getTotal(){
        const total = quantity * props.data.price;
        return total.toFixed(2);
    }

    function handleAdd(){
        let prodForCart = {...props.data}; //how to create copies of objects in JS using spread operators
        prodForCart.quantity = quantity;
        addProductToCart(prodForCart);
    }

    return(
        <div className="product">

            <img src={"./images/" + props.data.image} alt=""></img>
            <h5>{props.data.title}</h5>

            <div className="prices">
                <label className="total">${getTotal()}</label>
                <label className="price">${parseFloat(props.data.price).toFixed(2)}</label>
            </div>

            <QuantityPicker onChange={onQuantityChange} />

            <button onClick={handleAdd} className="btn btn-sm btn-success"><i class="fa-solid fa-plus"></i>Add</button>
        </div>
    );
}


export default Product;