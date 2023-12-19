import { ADD_TO_CART, REMOVE_FROM_CART } from "./action";
import productsData from "./productsData";

const initialState = {
    products: productsData,
    cart: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        
        
        default: 
            return state
    }
}

export default rootReducer;
