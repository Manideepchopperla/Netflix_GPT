import useMovieTrailer from '../hooks/useMovieTrailer'
import {useSelector } from 'react-redux'


const VideoBackground = ({movieId}) => {

    const trailer=useSelector(store=>store.movies?.trailerVideo)
    useMovieTrailer(movieId);
  return (
    <div className='w-[99vh]'>
      <iframe 
      className='w-[99vw] aspect-video'
      src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&playlist=${trailer?.key}&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`} 
      title="YouTube video player" 
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen       
      >
       </iframe>
    </div>
  )
}

export default VideoBackground
