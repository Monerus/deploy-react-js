import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'

export const getCatalog = createAsyncThunk('catalog/getCatalog', async () => {
    try {
        const { data } = await axios.get('/catalogs')
        return data
    } catch (error) {
        console.log(error)
    }
})

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        list: [],
        status: 'loading', 
        cart: [],
        data: null
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getCatalog.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getCatalog.fulfilled, (state, { payload }) => {
            state.list = payload
            state.status = 'resolved'
        })
        builder.addCase(getCatalog.rejected, (state) => {
            state.status = 'error'
        })
    }
})

export const catalogReducer = catalogSlice.reducer
