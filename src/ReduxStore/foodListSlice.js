import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: JSON.parse(localStorage.getItem('foodList')) || [],
}

export const foodListSlice = createSlice({
    name: "foodList",
    initialState,
    reducers: {
        addName: (state, action) => {
            state.value.push(action.payload)
            console.log(action.value)
        },
        addItem: (state, action) => {
            state.value.forEach((item, i) => { if (i === (action.payload.index)) return item.food?.push(action.payload.foodValue) })
        },
        removeItem: (state, action) => {
            state.value.splice(action.payload, 1)
        },
        removeItemFood: (state, action) => {
            state.value.forEach((item, index) => item.food.splice(action.payload, 1))

        }
    }
})


export const { addItem } = foodListSlice.actions
export const { removeItem } = foodListSlice.actions
export const { addName } = foodListSlice.actions
export const { removeItemFood } = foodListSlice.actions
export default foodListSlice.reducer;