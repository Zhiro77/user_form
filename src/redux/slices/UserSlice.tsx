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

        updateUserEmail: (state,action) => {

            state.users.map((user: any) => {
                if (user.email === action.payload.mail) {
                    user.email = action.payload.email   
                }
                
            })

            state.currentUser.email = action.payload.email
        }

        
        

    }
})

export let {setUser, removeUser, setCurrentUser, updateUserEmail} = userSlice.actions

export default userSlice.reducer