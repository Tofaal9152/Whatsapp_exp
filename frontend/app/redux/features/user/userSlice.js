"use client";
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({

    // 
    name: 'user',

    // 
    initialState: {
        authUser: null,
        getAllUser:null
    },

    // 
    reducers: {
        setAuthUser: (state, action) => {
            state.authUser = action.payload
        },
        seGetAllUser: (state, action) => {
            state.getAllUser = action.payload
        },
    },
})


export const { setAuthUser, seGetAllUser } = userSlice.actions

export default userSlice.reducer