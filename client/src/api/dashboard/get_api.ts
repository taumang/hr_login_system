import api from '../api'; 

api.get('http://localhost:5000/dashboard')
    .then((response) => {
        console.log(response); 
    })
    .catch((error) => {
        console.error(error);
    });