import fetch from 'isomorphic-fetch';

export const movie = () => {
    //console.log(`${NEXT_PUBLIC_API}/movie`);
    return fetch(`${process.env.NEXT_PUBLIC_API}/movies`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then(response => {
                 return response.json();
            })
            .catch(err => console.log(err));  
};

export const latest = () => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/movies/latest`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then(response => {
                 return response.json();
            })
            .catch(err => console.log(err));  
};

export const addfavourites = (item,token) => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/movies/favourites`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
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
    return fetch(`${process.env.NEXT_PUBLIC_API}/movies/favourites`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${token}`
            },
        })
            .then(response => {
                 return response.json();
            })
            .catch(err => console.log(err));  
};

