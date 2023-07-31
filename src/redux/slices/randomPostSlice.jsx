"use client";
"use client";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserPhotos } from '../../components/api/apiUtils';

const initialState = { 
    photo: [],
    loading:true,
    page:1,
 };

export const fetchUserPhotosAsync = createAsyncThunk(
  'photo/fetchUserPhotos',
  async ({ username, page }) => {
    try {
      const photos = await fetchUserPhotos(username, page);
      return photos;
    } catch (error) {
        console.log(error, "error in thunk")
      throw error;
    }
  }
);

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    increasePage: (state) => {
        state.page+=1;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPhotosAsync.pending, (state) => {
        state.loading=true;
      })
      .addCase(fetchUserPhotosAsync.fulfilled, (state, action) => {
        state.loading=false;
        state.photo = [...state.photo, ...action.payload];
      })
      .addCase(fetchUserPhotosAsync.rejected, (state, action) => {
      });
  },
});

export const { increasePage } = photoSlice.actions;
export default photoSlice.reducer;

