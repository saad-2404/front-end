import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8000/test');
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return null;
  }
};

export { fetchData };