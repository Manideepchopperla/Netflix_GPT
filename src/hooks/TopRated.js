import { useEffect } from 'react'
import { API_OPTIONS, TOPRATEDAPI } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addTopRatedMovies } from '../utils/moviesSlice'

const TopRated = () => {
  const dispatch = useDispatch()
  const getTopRatedMovies = async () => {
    const temp = await fetch(TOPRATEDAPI,API_OPTIONS)
    const data = await temp.json()
    console.log(data.results[3])
    dispatch(addTopRatedMovies(data.results))
  }

  useEffect(()=>{
    getTopRatedMovies();
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default TopRated
