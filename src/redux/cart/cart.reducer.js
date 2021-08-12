import { CartActionType } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartIems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {    
    switch (action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }   
        case CartActionType.ADD_ITEM:
            console.log("cartReducer");
            return {
                ...state,
                cartIems: addItemToCart(state.cartIems, action.payload)
            }         
        default:
            return state;
    }
}

export default cartReducer;