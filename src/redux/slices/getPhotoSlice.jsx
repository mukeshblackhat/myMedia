// import { createSlice } from "@reduxjs/toolkit";
// import { getUserPhotos } from "../actions/getPhotoAction";
 
// const initialState = {
//   data: [],
//   isLoading: false,
//   isSuccess: false,
//   errorMessage: ''
// }
 
// export const photoSlice = createSlice({
//   name: 'photo',
//   initialState,
//   extraReducers: {
//     [getUserPhotos.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [getUserPhotos.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.isSuccess = true;
//       state.data = payload;
//     },
//     [getUserPhotos.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.isSuccess = false;
//       state.errorMessage = payload
//     }
//   }
// })
 
// export default photoSlice.reducer;