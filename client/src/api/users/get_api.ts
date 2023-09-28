import api from '../api'; 

api.get('http://localhost:5000/users')
    .then((response) => {
        console.log(response); 
    })
    .catch((error) => {
        console.error(error);
    });