import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            // check if item is already in the cart
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                // if item exists in the cart, increment the amount
                state[itemIndex].amount += 1;
            } else {
                // if item does not exist in the cart, add it with amount:1
                const newProduct = { ...action.payload, amount: 1 };
                console.log(newProduct);
                state.push(newProduct);
            }
        },
        increase: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            if (item) item.amount += 1;
        },
        decrease: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            if (item && item.amount > 1) {
                item.amount -= 1;
            }
        }
    },
});

export const { addToCart, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;