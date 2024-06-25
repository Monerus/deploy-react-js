import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchAuth = createAsyncThunk('auth/fetchLogin', async (params) => {
    const { data } = await axios.post('/login', params)
    return data
})

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
    const { data } = await axios.post('/register',params)
    return data
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
    status: 'loading',
},
reducers: {
    addItemToCart: (state, { payload }) => {
        let newCart = [...state.cart];
        const found = state.cart.find(({ id }) => id === payload._id);
  
        if (found) {
          newCart = newCart.map((item) => {
            return item.id === payload.id
              ? { ...item, quantity: payload.quantity || item.quantity + 1 }
              : item
              
          });
        } else newCart.push({ ...payload, quantity: 1 });
        state.cart = newCart;
      },
      removeItemFromCart: (state, { payload }) => {
        state.cart = state.cart.filter(({ _id }) => _id !== payload);
      },
},
extraReducers: (builder) => {
builder.addCase(fetchAuth.pending, (state) => { // загрузка
        state.status = 'loading'
        state.data = null
    })
builder.addCase(fetchAuth.fulfilled, (state, action) => { // успешно
        state.status = 'resolved'
        state.data = action.payload  
    })
builder.addCase(fetchAuth.rejected, (state) => { // ОШИБКА 
        state.status = 'error'
        state.data = null
    })
builder.addCase(fetchRegister.pending, (state) => { // загрузка
        state.status = 'loading'
        state.data = null
    })
builder.addCase(fetchRegister.fulfilled, (state, action) => { // успешно
        state.status = 'resolved'
        state.data = action.payload  
    })
builder.addCase(fetchRegister.rejected, (state) => { // ОШИБКА 
        state.status = 'error'
        state.data = null
    })
    }
})

export const authReducer = authSlice.reducer
export const { addItemToCart} = authSlice.actions
export const selectIsAuth = (state) => Boolean(state.auth.data)

