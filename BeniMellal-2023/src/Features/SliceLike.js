import { createSlice } from '@reduxjs/toolkit'
const initValue = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 }
]
export const Store = createSlice({
  name: 'counterLike',
  initialState: initValue,
  reducers: {
    counter: (state, action) => {
      state.map(ele => {
        if (ele.id == action.payload) {
          return (ele.value = ele.value + 1)
        }
      })
    }
  }
})

export const { counter } = Store.actions
export default Store.reducer
