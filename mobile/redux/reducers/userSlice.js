import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'userData',
    initialState: {
        username: '',
        login: false,
        error: '',
    },
    reducers: {
        loginAction: (state) => {
            state.loading = true
            state.error = ''
        },
        loginSuccessAction: (state, action) => {
            state.login = true
            state.data = action.payload
        },
        getDataFailureAction: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const {
    getDataAction,
    getDataSuccessAction,
    getDataFailureAction,
} = sampleSlice.actions

export const selectData = (state) => state.sampleData.data
export const selectLoading = (state) => state.sampleData.loading
export const selectError = (state) => state.sampleData.error

export default sampleSlice.reducer
