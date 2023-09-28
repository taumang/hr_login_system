import axios from 'axios';

async function api() {
    try {
        const response = await axios.get<string>("http://localhost:5000");
        const data = response.data;
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

api();