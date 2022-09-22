
import { configureStore } from "@reduxjs/toolkit";
import userReducer  from './slices/UserSlice'
import chartReducer  from './slices/ChartSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        chart: chartReducer
    }
})

