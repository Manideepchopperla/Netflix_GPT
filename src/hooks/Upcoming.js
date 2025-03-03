import { useEffect } from 'react'
import { API_OPTIONS, UPCOMINGAPI } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {  addUpcomingMovies } from '../utils/moviesSlice'

const Upcoming = () => {
  const dispatch = useDispatch()
  const upcomingMovies = useSelector((store) => store.movies.UpcomingMovies)
  const getUpcomingMoviesApi = async () => {
    const temp = await fetch(UPCOMINGAPI,API_OPTIONS)
    const data = await temp.json()

    dispatch(addUpcomingMovies(data.results))
  }

  useEffect(()=>{
    !upcomingMovies &&  getUpcomingMoviesApi();
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default Upcoming
