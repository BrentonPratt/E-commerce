const initialState = {
    cartItems: []
};

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: state.cartItems.concat(action.item)
            };
        case 'DELETE_FROM_CART':
            let i = action.id;
            return {
                ...state,
                cartItems: state.cartItems.slice(0, i).concat(state.cartItems.slice(i+1, state.cartItems.length))
            };
        case 'CHECK_OUT':
            return {
                ...state,
                cartItems: []
            };
        default:
            return state;
    }
}