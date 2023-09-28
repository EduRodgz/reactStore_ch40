import { useState } from 'react';
import StoreContext from "./storeContext";

function GlobalState(props){
    const [cart, setCart]=useState([]);
    const [user, setUser]=useState({id:1234, name:"Eduardo"});

    function addProductToCart(prod){
        // modify state object/state array
        //create,modify,send copy back
        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    }

    function removeProductFromCart(){
        console.log("global remove");
    }

    return(
        <StoreContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart,
        }}>{props.children}</StoreContext.Provider>
    );
}

export default GlobalState;