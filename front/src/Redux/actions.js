// Actions
import axios from 'axios'

// (1) Get all products
const GET_PRODUCTS = 'GET_PRODUCTS'
// (2) Get product details
const GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS'
// (3) Add to cart
const ADD_TO_CART = 'ADD_TO_CART'
// (4) Remove of cart
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'


// async action functions
export const getProducts = () => {
    return async function(dispatch){
        try{
            const response = await axios.get('http://localhost:5000/api/products')
            return dispatch({type: GET_PRODUCTS, payload: response.data})
        }catch(error){
            return console.log(error);
        }
    }
}

export const getProductDetails = (id) => {
    return async function(dispatch){
        try{
            const response = await axios.get(`http://localhost:5000/api/products/${id}`)
            return dispatch({type: GET_PRODUCT_DETAILS, payload: response.data})
        }catch(error){
            return console.log(error);
        }
    }
}

// sync action functions
export const addToCart = (product) =>{
    return { type: ADD_TO_CART, payload: product };
}

export const removeFromCart = (id) =>{
    return { type: REMOVE_FROM_CART, payload: id };
}
