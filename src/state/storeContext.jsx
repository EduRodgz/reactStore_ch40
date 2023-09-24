import {createContext} from 'react';

//context is interface, description of the data, it promises data. does not contain implementation//

const StoreContext = createContext({
    cart: [],
    user: {},
    addProductToCart: () => {},
    removeProductFromCart: () => {}
});


export default StoreContext;