import "./product.css";
import QuantityPicker from "./quantityPicker";
import {useEffect} from "react";

function Product(props){

    useEffect(function(){
        console.log("Component loaded");
    },[]);


    return(
        <div className="product">

            <img src={"./images/" + props.data.image} alt=""></img>
            <h5>{props.data.title}</h5>
            <label>{props.data.price}</label>
            <label>Total</label>
            <QuantityPicker/>
        </div>
    )
}


export default Product;