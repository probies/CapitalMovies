import Header from '../../components/header'
import { useState, useEffect } from 'react';
import { movie, addfavourites , favourites } from '../../actions/movies'
import MoviesCard from '../../components/movies';
import { isAuth,getCookie } from '../../actions/auth';

export default function Home({results}) {

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
      <main>
        <Header />
        <MoviesCard data={results}  update={handleclick}/>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await movie()
  const results = await res.results
  results.map( item => item['favourite'] =false )

  // Pass data to the page via props
  return { props: { results } }
}
