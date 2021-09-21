//useSlice is just like a context api or useContext in react hook that's I give this file name as userSlice
import {createSlice} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
//import store from "../app/store";

const userSlice = createSlice({
    name:"user",
    initialState: {
        user: storage,
    },
    reducers:{
        login:(state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) =>{
            state.user = action.payload;
        },
    },
});

export const {login, logout} = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;