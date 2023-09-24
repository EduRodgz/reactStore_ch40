import "./product.css";
import QuantityPicker from "./quantityPicker";
import {useEffect, useState} from "react";

function Product(props){
    const [quantity, setQuantity] = useState(1);
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
        console.log('Message');
    }

    return(
        <div className="product">

            <img src={"./images/" + props.data.image} alt=""></img>
            <h5>{props.data.title}</h5>

            <div className="prices">
                <label className="total">${getTotal()}</label>
                <label className="price">${props.data.price.toFixed(2)}</label>
            </div>

            <QuantityPicker onChange={onQuantityChange} />

            <button onCick={handleAdd}className="btn btn-sm btn-success">Add</button>
        </div>
    );
}


export default Product;