import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice =  createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {


            const founditem = state.cart.find((item) => item.id === action.payload.id)

            if (!founditem) {
                state.push(action.payload);
            } else {
                return state.cart.map(item => ({
                    ...item,
                    quantity: item.id === founditem.id ? item.quantity + 1 : item.quantity
                }))
            }

        },
        deleteCart: (state, action) => {
            state.cart.filter((item) => item.id !== action.payload)
        }
    }
})

// Action creater
export const {addToCart, deleteCart} = cartSlice.actions ;

// Reducer
export default cartSlice.reducer;