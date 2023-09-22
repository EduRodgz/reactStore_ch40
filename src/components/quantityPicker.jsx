import "./quantityPicker.css"
import {useState} from "react";


function QuantityPicker(){
    let[quantity,setQuantity] = useState(1);

    function decrease(){
        console.log("Decreasing quantity");
        if(quantity===1)return;
        let val = quantity -1;
        setQuantity(val);
    }
    function increase(){
        console.log("Increasing quantity");
        let val = quantity +1;
        setQuantity(val);
    }
    return(
        <div className="qt-picker">
            <button className="btn btn-sm btn-dark" disabled={quantity===1} onClick={decrease}>
            -
            </button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-dark" onClick={increase}>
            +
            </button>

        </div>
    )
}

export default QuantityPicker;