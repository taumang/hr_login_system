import api from '../api.ts'; 

api.get('http://localhost:5000/users/:id')
    .then((response) => {
        console.log(response); 
    })
    .catch((error) => {
        console.error(error);
    });