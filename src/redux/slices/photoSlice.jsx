import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
  name: 'photo',
  initialState: {photo: []},
  reducers: {
    addPhotos: (state, action) => {
        console.log("line 8  photoslice reducer", action.payload, state)
        state.photo = [...state.photo, ...action.payload]
  
    },
  },
});

export const { addPhotos } = photoSlice.actions;
export default photoSlice.reducer;