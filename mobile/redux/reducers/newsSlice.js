import { createSlice } from "@reduxjs/toolkit"

export const newsSlice = createSlice({
    name: 'newsData',
    initialState: {
        news: [],
        categories: [],
        loading: false,
        error: '',
    },
    reducers: {
        getNewsAction: (state) => {
            state.loading = true
            state.error = ''
        },
        getNewsSuccessAction: (state, action) => {
            state.loading = false
            state.news = action.payload
        },
        getAllCategoriesAction: (state) => {
            state.loading = true
            state.error = ''
        },
        getCategorySuccessAction: (state, action) => {
            state.loading = false
            state.categories = action.payload
        },
        getNewsByCategoryAction: (state) => {
            state.loading = true
            state.error = ''
        },
        getNewsFailureAction: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const {
    getNewsAction,
    getNewsSuccessAction,
    getAllCategoriesAction,
    getCategorySuccessAction,
    getNewsByCategoryAction,
    getNewsFailureAction,

} = newsSlice.actions

export const selectNews = (state) => state.newsData.news
export const selectLoading = (state) => state.newsData.loading
export const selectError = (state) => state.newsData.error

export default newsSlice.reducer
