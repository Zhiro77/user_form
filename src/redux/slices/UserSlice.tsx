import { createSlice } from "@reduxjs/toolkit";


const initialState: any = {
    users: [],
    currentUser: {}
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
        setUser: (state,action) => {

            state.users.push(action.payload)

        },

        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },

        removeUser: (state) => {
            state.currentUser = null
        },
        

    }
})

export let {setUser, removeUser, setCurrentUser} = userSlice.actions

export default userSlice.reducer