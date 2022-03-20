import fetch from 'isomorphic-fetch';

export const movie = () => {
    return fetch(`http://localhost:8000/api/movies`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                 return response.json();
            })
            .catch(err => console.log(err));  
};

export const latest = () => {
    return fetch(`http://localhost:8000/api/movies/latest`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                 return response.json();
            })
            .catch(err => console.log(err));  
};