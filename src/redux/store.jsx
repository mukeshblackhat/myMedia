
"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import photoReducer from './slices/photoSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  photo:photoReducer,
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

 });