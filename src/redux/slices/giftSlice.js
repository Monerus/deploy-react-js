import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'

export const getGift = createAsyncThunk('catalog/getGift', async () => {
    try {
        const { data } = await axios.get('/gifts')
        return data
    } catch (error) {
        console.log(error)
    }
})

const giftSlice = createSlice({
    name: 'gift',
    initialState: {
        list: [],
        status: 'loading'
    },
    extraReducers: (builder) => {
        builder.addCase(getGift.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getGift.fulfilled, (state, { payload }) => {
            state.list = payload
            state.status = 'resolved'
        })
        builder.addCase(getGift.rejected, (state) => {
            state.status = 'error'
        })
    }
})

export const giftReducer = giftSlice.reducer