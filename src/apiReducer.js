import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from './Api';

const initialState = {
    items: [],
    error: null
};

export default function productReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                error: null
            };

        case FETCH_PRODUCTS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                items: action.payload.products
            };

        case FETCH_PRODUCTS_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                error: action.payload.error,
                items: []
            };

        default:
            return state;
    }
}