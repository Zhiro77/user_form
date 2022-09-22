import { createSlice } from "@reduxjs/toolkit";


const initialState: any = {
    chartData: {}
};

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {
        
        setChart: (state,action) => {
        
            state.chartData = action.payload

        },
       
    }
})

export let {setChart} = chartSlice.actions

export default chartSlice.reducer