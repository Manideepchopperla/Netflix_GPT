import { useEffect } from 'react'
import { API_OPTIONS, POPULARAPI } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'

const Popular = () => {
  const dispatch = useDispatch()
  const getPopularMoviesApi = async () => {
    const temp = await fetch(POPULARAPI,API_OPTIONS)
    const data = await temp.json()
    dispatch(addPopularMovies(data.results))
  }

  useEffect(()=>{
    getPopularMoviesApi();
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default Popular
