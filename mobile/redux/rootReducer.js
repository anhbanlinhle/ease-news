import sampleReducer from './reducers/sampleSlice';
import newsReducer from './reducers/newsSlice';
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  sampleData: sampleReducer,
  newsData: newsReducer,
})

export default rootReducer;
