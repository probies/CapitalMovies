import Header from '../../components/header'
import MoviesCard from '../../components/movies'
import { useState, useEffect } from 'react';
import { addfavourites, favourites, search } from '../../actions/movies'
import { isAuth,getCookie } from '../../actions/auth';
import Head from 'next/head';
import { debounce } from '../../utility/debounce';

export default function Latest() {

  const [data,setData] = useState({})
  const [result,setResult] = useState({})

  const token = getCookie('token');

    useEffect(() => {

        if(isAuth()){
          favourites(token).then(favourite => {
            favourite.map(item => item['favourite'] = true)
            setData(favourite)
            setResult(favourite)
          })
        }

    },[token])


  const handleclick = (item,index,token) => {
      addfavourites(item,token).then(data => {
          console.log(data.message)  
      })
      setData( (Data) =>{
        Data[index]['favourite'] = true
        return [...Data]
      })

  }

  const handleSearchQuery = (query) => {
    if(query == ''){
      setData(result)
    }
    else{
      search(query).then(data => {
        setData(data.results)
      })
    }
  }

  const handleSearchDebouce = debounce(handleSearchQuery, 300);


  return (
    <div>
      <Head>
        <title>Favourites | Capital Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header handleSearchQuery={handleSearchDebouce} />
        <MoviesCard data={data}  update={handleclick} />
      </main>
    </div>
  )
}

