const initialState = {
    search: '',
    arrRes: [],
};

export default function searchReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_SEARCH_RESULT':
            return {
                ...state,
                search: action.search,
                arrRes: [...action.arrRes],
            };
            default:
                return state;
    }
}