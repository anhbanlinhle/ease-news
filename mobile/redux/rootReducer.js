import sampleReducer from './reducers/sampleSlice';
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  sampleData: sampleReducer,
})

export default rootReducer;
