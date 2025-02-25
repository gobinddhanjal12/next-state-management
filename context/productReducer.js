import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    ADD_PRODUCT,
    DELETE_PRODUCT,
} from "./productActions";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

export function productReducer(state, action) {
    switch (action.type) {
        case FETCH_START:
            return { ...state, loading: true, error: null };
        case FETCH_SUCCESS:
            return { ...state, loading: false, products: action.payload };
        case FETCH_ERROR:
            return { ...state, loading: false, error: action.payload };
        case ADD_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload),
            };
        default:
            return state;
    }
}

export default initialState;