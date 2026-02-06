import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Features/SliceLike'
export const Store = configureStore({
  reducer: {
    like: CounterReducer
  }
})
