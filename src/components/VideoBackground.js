import useMovieTrailer from '../hooks/useMovieTrailer'
import {useSelector } from 'react-redux'


const VideoBackground = ({movieId}) => {

    const trailer=useSelector(store=>store.movies?.trailerVideo)
    useMovieTrailer(movieId);
  return (
    <div className='w-screen'>
      <iframe 
      className='w-screen aspect-video'
      src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&playlist=${trailer?.key}&mute=1`} 
      title="YouTube video player" 
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen       
      >
       </iframe>
    </div>
  )
}

export default VideoBackground
