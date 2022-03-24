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

export const addfavourites = (item,token) => {
    return fetch(`http://localhost:8000/api/movies/favourites`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(item)
        })
            .then(response => {
                 return response.json();
            })
            .catch(err => console.log(err));  
};

export const favourites = token => {
    return fetch(`http://localhost:8000/api/movies/favourites`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
            .then(response => {
                 return response.json();
            })
            .catch(err => console.log(err));  
};

