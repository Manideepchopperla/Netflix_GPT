import { useEffect } from 'react'
import { API_OPTIONS, POPULARAPI } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'

const Popular = () => {
  const dispatch = useDispatch()
  const popularMovies = useSelector((store) => store.movies.popularMovies)

  const getPopularMoviesApi = async () => {
    const temp = await fetch(POPULARAPI,API_OPTIONS)
    const data = await temp.json()
    dispatch(addPopularMovies(data.results))
  }

  useEffect(()=>{
    !popularMovies && getPopularMoviesApi();
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default Popular
