import React from 'react'

export default function Movies({data}) {

    if(Object.keys(data).length === 0){
        return <div>Loading...</div>
    }

    return(
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 m-4'>
        {data.map( item => {
        return (
            <div className='col justify-space-around mb-4' key={item.id}>

                <div className="card h-100" style={{'backgroundColor':'#212529!important'}}>

                    <img className="card-img-top mx-auto" style={{'maxHeight':'22rem'}}
                        src={
                        item.poster_path?
                        `https://image.tmdb.org/t/p/w500${item.poster_path}`:
                        'https://i.imgur.com/Z2MYNbj.png/large_movie_poster.png'} alt="Card image cap" />

                    <div className="card-body d-flex justify-content-between">

                        <h5 className="card-title">{item.title}</h5>
                        <h5 className="card-title">{item.vote_average}</h5>

                    </div>

                </div>

            </div>
        )}
        )}
    </div>   
    )
}
