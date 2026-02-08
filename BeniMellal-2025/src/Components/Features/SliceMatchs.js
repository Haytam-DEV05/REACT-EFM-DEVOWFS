import { createSlice } from '@reduxjs/toolkit'
const initState = {
  matchs: []
}

export const SliceMatchs = createSlice({
  name: 'matchs',
  initialState: initState,
  reducers: {
    setMatchs: (state, action) => {
      state.matchs = action.payload
    },
    incrementLike: (state, action) => {
      let matchs = state.matchs.find(ele => ele.id === action.payload)
      if (matchs) {
        matchs.like += 1
      }
    },
    incrementDeslike: (state, action) => {
      let matchs = state.matchs.find(ele => ele.id === action.payload)
      if (matchs) {
        matchs.deslike += 1
      }
    }
  }
})

export const { setMatchs, incrementLike, incrementDeslike } =
  SliceMatchs.actions
export default SliceMatchs.reducer
