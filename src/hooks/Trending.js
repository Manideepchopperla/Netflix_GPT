import { useEffect } from 'react'
import { API_OPTIONS, TRENDINGAPI } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrendingMovies } from '../utils/moviesSlice'

const Trending = () => {
  const dispatch = useDispatch()
  const getTremdingApi = async () => {
    const temp = await fetch(TRENDINGAPI,API_OPTIONS)
    const data = await temp.json()
    console.log(data.results[3])
    dispatch(addTrendingMovies(data.results))
  }

  useEffect(()=>{
    getTremdingApi();
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default Trending
