import { createOperation } from "@apollo/client/link/utils"

export const ADD_TO_CAST = 'ADD_TO_CART'
export const DELETE_CART = 'DELETE_CART'
    

//Action creator

export function addToCart(addedProduct){
    return {
        type: ADD_TO_CAST,
        payload: addedProduct
    }
}

export function deleteCart(id) {
    return {
        type: DELETE_CART,
        payload: id
    }
}