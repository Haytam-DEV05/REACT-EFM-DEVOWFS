import { configureStore } from '@reduxjs/toolkit'
import SliceReducer from '../Feature/SliceArticles'

export const store = configureStore({
  reducer: {
    articlesSlice: SliceReducer
  }
})
