import axios from 'axios';

const clientId = process.env.NEXT_PUBLIC_CLIENTID; // Replace 'YOUR_CLIENT_ID_HERE' with your actual client ID

export const fetchRandomPhotos = async () => {
  try {
    const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${clientId}&count=10`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/users/${username}?client_id=${clientId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const fetchUserPhotos = async (username, page) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/users/${username}/photos?client_id=${clientId}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching user photos:', error);
    throw error;
  }
};
