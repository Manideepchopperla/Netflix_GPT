import { useEffect } from 'react'
import { API_OPTIONS, UPCOMINGAPI } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {  addUpcomingMovies } from '../utils/moviesSlice'

const Upcoming = () => {
  const dispatch = useDispatch()
  const getUpcomingMoviesApi = async () => {
    const temp = await fetch(UPCOMINGAPI,API_OPTIONS)
    const data = await temp.json()

    dispatch(addUpcomingMovies(data.results))
  }

  useEffect(()=>{
    getUpcomingMoviesApi();
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default Upcoming
