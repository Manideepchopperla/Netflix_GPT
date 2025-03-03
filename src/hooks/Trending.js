import { useEffect } from 'react'
import { API_OPTIONS, TRENDINGAPI } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrendingMovies } from '../utils/moviesSlice'

const Trending = () => {
  const dispatch = useDispatch()
  const TrendingMovies = useSelector((store) => store.movies.TrendingMovies)
  const getTrendingMovies = async () => {
    const temp = await fetch(TRENDINGAPI,API_OPTIONS)
    const data = await temp.json()

    console.log(data)
    dispatch(addTrendingMovies(data.results))
  }

  useEffect(()=>{
    !TrendingMovies && getTrendingMovies();
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default Trending
