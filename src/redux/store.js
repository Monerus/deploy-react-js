import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import { discountReducer } from './slices/discountSlice';
import { reviewsReducer } from './slices/reviewsSlice';
import { catalogReducer } from './slices/catalogSlice';
import { giftReducer } from './slices/giftSlice';

const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        auth: authReducer,
        discount: discountReducer,
        reviews: reviewsReducer,
        gift: giftReducer,
    }
})

export default store