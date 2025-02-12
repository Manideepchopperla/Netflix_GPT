import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addTrailer } from '../utils/moviesSlice'

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    const getMovieTrialer = async()=>{
        const temp = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);
        const data = await temp.json()
        //console.log(data.results)
        const filterData = data.results.filter(each=>each.type==="Trailer")
        const trailer = filterData.length ? filterData[0] : data.results[0]
        //console.log(trailer)
        dispatch(addTrailer(trailer))
    }

    useEffect(()=>{
        getMovieTrialer();
    },[])
}

export default useMovieTrailer
