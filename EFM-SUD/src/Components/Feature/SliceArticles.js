import { createSlice } from '@reduxjs/toolkit'
const initState = {
  articles: [
    { id: 10, designation: 'article1', famille: 'Informatique' },
    { id: 11, designation: 'article2', famille: 'bureau' }
  ]
}
export const SliceArticles = createSlice({
  name: 'articles',
  initialState: initState,
  reducers: {
    add_article: (state, action) => {
      state.articles.push({ id: Date.now(), ...action.payload })
    },
    delete_article: (state, action) => {
      state.articles = state.articles.filter(ele => ele.id != action.payload)
    }
  }
})

export const { add_article, delete_article } = SliceArticles.actions
export default SliceArticles.reducer
