import fetch from 'isomorphic-fetch';

export const movie = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/movies`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }  
};

export const latest = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/movies/latest`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }  
};

export const addfavourites = async (item,token) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/movies/favourites`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(item)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }  
};

export const favourites = async token => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/movies/favourites`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${token}`
            },
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }  
};

export const search = async (query) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/movies/search?query=${query}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }  
}

