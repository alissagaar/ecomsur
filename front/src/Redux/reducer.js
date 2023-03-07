const initialState = {
    productList: [],
    productDisplay: {},
    cart: []
}

export default function rootReducer(state= initialState, action){
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                productList: action.payload,
            }
        case 'GET_PRODUCT_DETAILS':
            return {
                ...state,
                productDisplay: action.payload
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload)
            }
        default:
            return {...state};
    }
}