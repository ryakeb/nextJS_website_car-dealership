import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
    cartTotal: 0,
    cartQuantity: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const carIndex = state.value.findIndex((car) => car.id === action.payload.id);
            if (carIndex >= 0) {
                state.value[carIndex].quantity += 1;
            } else {
                const carAdded = { ...action.payload, quantity: 1 };
                state.value.push(carAdded);
            }

        },
        removeFromCart: (state, action) => {
            state.value.splice(action.payload, 1);
        },
        decrement: (state, action) => {
            const carIndex = state.value.findIndex((car) => car.id === action.payload.id);
            if (state.value[carIndex].quantity >= 1) {
                state.value[carIndex].quantity -= 1;
            }
            else if (state.value[carIndex].quantity === 1) {
                const updatedCart = state.value.filter((car) => car.id !== action.payload.id);
                state.value = updatedCart;
            }

        },
        //get total price of cart items 
        getCartTotal: (state, action) => {
            let { total, quantity } = state.value.reduce(
                (cartTotal, car) => {
                    const { price, quantity } = car;
                    const itemTotal = price * quantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += quantity;
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                });
            state.cartTotal = total;
            state.cartQuantity = quantity;
            console.log("The total is :");
            console.log(state.cartTotal);
        },
        checkOut: (state) => {
            state.value.length = 0;
        }
    },
});

export const { addToCart, removeFromCart, decrement, getCartTotal, checkOut } = cartSlice.actions;

export default cartSlice.reducer;
