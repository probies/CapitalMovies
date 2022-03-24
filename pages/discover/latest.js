import Head from 'next/head';
import Header from '../../components/header'
import MoviesCard from '../../components/movies'
import { useState, useEffect } from 'react';
import { latest, addfavourites , favourites } from '../../actions/movies'
import { isAuth,getCookie } from '../../actions/auth';

export default function Latest({results}) {

  const [data,setData] = useState(results)
  const token = getCookie('token');

    useEffect(() => {

        if(isAuth()){
          favourites(token).then(favourite => {
            favourite.map( item => {
              console.log(item.id)
              setData( (Data) =>{
                Data.map( (i,index) => {
                  if(item.id === i.id){
                    Data[index]['favourite'] = true
                  }
                })
                return [...Data]
              })
            })
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


  return (
    <div>

      <Head>
        <title>Latest | Capital Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <MoviesCard data={results}  update={handleclick}/>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await latest()
  const results = await res.results
  results.map( item => item['favourite'] =false )

  // Pass data to the page via props
  return { props: { results } }
}
