import Header from '../../components/header'
import MoviesCard from '../../components/movies'
import { useState, useEffect } from 'react';
import { addfavourites , favourites } from '../../actions/movies'
import { isAuth,getCookie } from '../../actions/auth';

export default function Latest() {

  const [data,setData] = useState({})
  const token = getCookie('token');

  

    useEffect(() => {

        if(isAuth()){
          favourites(token).then(favourite => {
            favourite.map(item => item['favourite'] = true)
            setData(favourite)
          })
        }

    },[])


  const handleclick = (item,index,token) => {
      addfavourites(item,token).then(data => {
          console.log(data.message)  
      })
      setData( (Data) =>{
        Data[index]['favourite'] = true
        return [...Data]
      })

  }


  return (
    <div>
      <main>
        <Header />
        <MoviesCard data={data}  update={handleclick}/>
      </main>
    </div>
  )
}

