import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addTrailer } from '../utils/moviesSlice'

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    const trailer = useSelector((store) => store.movies.trailerVideo)
    const getMovieTrialer = async()=>{
        const temp = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);
        const data = await temp.json()
        const filterData = data.results.filter(each=>each.type==="Trailer")
        const trailer = filterData.length ? filterData[0] : data.results[0]
        dispatch(addTrailer(trailer))
    }

    useEffect(()=>{
        !trailer && getMovieTrialer();
    },[])
}

export default useMovieTrailer
