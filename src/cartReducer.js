const initialState = {
    cartItems: []
};

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...action.cartItems]
            };
        case 'DELETE_FROM_CART':
            return {

            };
        case 'CHECK_OUT':
            return {

            };
        default:
            return state;
    }
}