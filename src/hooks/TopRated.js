import { useEffect } from 'react'
import { API_OPTIONS, TOPRATEDAPI } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addTopRatedMovies } from '../utils/moviesSlice'

const TopRated = () => {
  const dispatch = useDispatch()
  const TopRatedMovies = useSelector((store) => store.movies.TopRatedMovies)
  const getTopRatedMovies = async () => {
    const temp = await fetch(TOPRATEDAPI,API_OPTIONS)
    const data = await temp.json()

    dispatch(addTopRatedMovies(data.results))
  }

  useEffect(()=>{
    !TopRatedMovies && getTopRatedMovies();
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default TopRated
