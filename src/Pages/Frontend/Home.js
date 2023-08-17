import React from 'react'
import { BASE_URL } from '../../Api/api'
import HomeProducts from '../../Components/Frontend/HomeProducts'


import useDoubleFetch from '../../Hooks/useDoubleFetch'

const Home = () => {
  const { data1: category, error, } = useDoubleFetch([ `${BASE_URL}/category`])




  if(error) return <div className='mt-5 text-center'>{error}</div>;

  return (
    <>
      

      { category && (
        <div className='container mt-2'>
          { category.map(cat => {
            const { id, category, status } = cat;
            return status === 'active' ? (
              <HomeProducts key={id} category={category} />
            ) : null ;
          })}
        </div>
      )}
    </>
  )
}

export default Home