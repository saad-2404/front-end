// import { sample } from 'lodash';
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8000/audio', {
      responseType: 'arraybuffer' // Ensure response is treated as binary data
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};

export { fetchData };


// Use the fetchData function to fetch data and populate products
export const products = fetchData().then(data => {
  if (!data) {
    return [];
  }

  return data.map((audio, index) => ({
    id: index,
    audioData: audio
  }));
});
