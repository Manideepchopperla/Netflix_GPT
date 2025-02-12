import { useEffect } from 'react'
import { NOWPLAYINGAPI,API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const NowPlaying = () => {
  const dispatch = useDispatch()
  const getNowPlayingApi = async () => {
    const temp = await fetch(NOWPLAYINGAPI,API_OPTIONS)
    const data = await temp.json()
    console.log(data.results[3])
    dispatch(addNowPlayingMovies(data.results))
  }

  useEffect(()=>{
    getNowPlayingApi();
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default NowPlaying
