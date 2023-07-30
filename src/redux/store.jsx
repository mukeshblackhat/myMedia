"use client";
import {  configureStore  } from "@reduxjs/toolkit";
import photoReducer from './slices/photoSlice'

export const store = configureStore({
  reducer:{
  photo:photoReducer,
  },

 });