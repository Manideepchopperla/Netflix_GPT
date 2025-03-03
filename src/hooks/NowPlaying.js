import { useEffect } from 'react'
import { NOWPLAYINGAPI,API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const NowPlaying = () => {
  const dispatch = useDispatch()

  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)

  const getNowPlayingApi = async () => {
    const temp = await fetch(NOWPLAYINGAPI,API_OPTIONS)
    const data = await temp.json()
 
    dispatch(addNowPlayingMovies(data.results))
  }

  useEffect(()=>{
    !nowPlayingMovies && getNowPlayingApi();
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default NowPlaying
