import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'

export const getReviews = createAsyncThunk('catalog/getReviews', async () => {
    try {
        const { data } = await axios.get('/reviews')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const getReview = createAsyncThunk('catalog/getReview', async () => {
    try {
        const { data } = await axios.post('/review')
        return data
    } catch (error) {
        console.log(error)
    }
})

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        list: [],
        status: 'loading'
    },
    extraReducers: (builder) => {
        builder.addCase(getReviews.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getReviews.fulfilled, (state, { payload }) => {
            state.list = payload
            state.status = 'resolved'
        })
        builder.addCase(getReviews.rejected, (state) => {
            state.status = 'error'
        })
        builder.addCase(getReview.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getReview.fulfilled, (state, { payload }) => {
            state.list = payload
            state.status = 'resolved'
        })
        builder.addCase(getReview.rejected, (state) => {
            state.status = 'error'
        })
    }
})

export const reviewsReducer = reviewsSlice.reducer