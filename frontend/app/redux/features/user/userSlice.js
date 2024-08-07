"use client";
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({

    // 
    name: 'user',

    // 
    initialState: {
        authUser: null,
        getAllUser: null,
        selectedUser: null,
        messagesRedux: null,
    },

    // 
    reducers: {
        setAuthUser: (state, action) => {
            state.authUser = action.payload
        },
        seGetAllUser: (state, action) => {
            state.getAllUser = action.payload
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        },
        setMessagesRedux: (state, action) => {
            state.messagesRedux = action.payload
        },
    },
})


export const { setAuthUser, seGetAllUser, setSelectedUser, setMessagesRedux } = userSlice.actions

export default userSlice.reducer