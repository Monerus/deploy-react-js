import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'

export const getDiscount = createAsyncThunk('catalog/getDiscount', async () => {
    try {
        const { data } = await axios.get('/discounts')
        return data
    } catch (error) {
        console.log(error)
    }
})

const discountSlice = createSlice({
    name: 'discounts',
    initialState: {
        list: [],
        status: 'loading'
    },
    extraReducers: (builder) => {
        builder.addCase(getDiscount.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getDiscount.fulfilled, (state, { payload }) => {
            state.list = payload
            state.status = 'resolved'
        })
        builder.addCase(getDiscount.rejected, (state) => {
            state.status = 'error'
        })
    }
})

export const discountReducer = discountSlice.reducer
