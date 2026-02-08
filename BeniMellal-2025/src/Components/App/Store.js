import { configureStore } from '@reduxjs/toolkit'
import MatchsProvider from "../Features/SliceMatchs"
export const Store = configureStore({
  reducer: {
    matchs:MatchsProvider
  }
})
