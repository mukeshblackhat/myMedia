// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';

// // Assuming you have your clientId stored somewhere in your application
// const clientId = '2NM-VYGaTdxN94KhcNHnJNuEa-zT57ygPUV3UPiFtDY';

// export const fetchUserPhotos = async (username, page) => {
//   try {
//     console.log("api call tak pahunch gye ")
//     const response = await axios.get(
//       `https://api.unsplash.com/users/${username}/photos?client_id=${clientId}&page=${page}`
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching user photos:', error);
//     throw error;
//   }
// };

// export const getUserPhotos = createAsyncThunk('user/getUserPhotos', async (username, page, { rejectWithValue }) => {
//   try {
//     console.log("line 21 in  thunk testing reached")
//     const data = await fetchUserPhotos(username, page, clientId);
//     return data;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });