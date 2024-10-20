import {createSlice} from "@reduxjs/toolkit"

export const sampleSlice = createSlice({
  name: 'sampleData',
  initialState: {
    data: [],
    loading: false,
    error: '',
  },
  reducers: {
    getDataAction: (state) => {
      state.loading = true
      state.error = ''
    },
    getDataSuccessAction: (state, action) => {
      state.loading = false
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
