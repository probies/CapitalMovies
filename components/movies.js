import React from 'react'
import { getCookie } from '../actions/auth'
import { isAuth } from '../actions/auth'

export default function MoviesCard({data,update}) {
    const token = getCookie('token');

    if(Object.keys(data).length === 0){
        return <div>Loading...</div>
    }

    return(
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 m-4'>
        {data.map( (item,index) => {
        return (
            <div className='col justify-space-around mb-4' key={item.id} onDoubleClick={()=> update(item,index,token)}>

                <div className="card h-100" style={{'backgroundColor':'#212529!important'}}>

                    <div className='image-details'>

                    <img className="card-img-top mx-auto" style={{'maxHeight':'22rem'}}
                        src={
                        item.poster_path?
                        `https://image.tmdb.org/t/p/w500${item.poster_path}`:
                        'https://i.imgur.com/Z2MYNbj.png/large_movie_poster.png'} alt="Card image cap" />

                    <div className="card-img-overlay" >
                        <div className="card-body">

                            <div className='overlay-item d-flex flex-column'>
                            <small className='font-weight-light'>Rating</small>
                            <h6 className='border-bottom pb-1'>{item.vote_average}</h6>
                            </div>

                            <div className='overlay-item'>
                            <small className='font-weight-light'>Popularity</small>
                            <h6 className='border-bottom pb-1'>{Math.round(item.popularity)}</h6>

                            </div>

                            <div className='overlay-item'>
                            <small className='font-weight-light'>Release Date</small>
                            <h6 className='border-bottom pb-1'>{item.release_date}</h6>

                            </div>

                            <div className='overlay-item'>

                            <small className='font-weight-light'>Reviews</small>
                            <h6>
                                {item.vote_count}
                            </h6>

                            </div>
                        </div>     
                    </div>

                    </div>

                    <div className="card-body d-flex justify-content-between">

                        <h5 className="card-title">{item.title}</h5>

                        { isAuth() && 
                            <div className="card-title" style={{"cursor":"pointer"}}
                                onClick={() => update(item,index,token)}>
                                    {item.favourite?
                                    <i className="bi bi-heart-fill" style={{'color':'red'}}></i>
                                    :<i className="bi bi-heart"></i>}
                            </div>
                        }

                    </div>

                </div>
            </div>
        )}
        )}
    </div>   
    )
}
