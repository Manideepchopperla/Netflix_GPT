import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        upcomingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        trendingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies: (state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies: (state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpcomingMovies: (state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addTrendingMovies: (state,action)=>{
            state.trendingMovies=action.payload
        },
        addTrailer : (state,action)=>{
            state.trailerVideo=action.payload
        }
    }
})

export const { addNowPlayingMovies, addTrendingMovies, addTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies }=moviesSlice.actions

export default moviesSlice.reducer;