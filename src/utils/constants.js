

export const LOGO=
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_AVATAR=
    "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"

export const BANNER=
    "https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg"

export const NOWPLAYINGAPI="https://api.themoviedb.org/3/movie/now_playing?page=1"

export const POPULARAPI="https://api.themoviedb.org/3/movie/popular?page=1"

export const TOPRATEDAPI="https://api.themoviedb.org/3/movie/top_rated?page=1"

export const UPCOMINGAPI="https://api.themoviedb.org/3/movie/upcoming?page=1"

export const TRENDINGAPI = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_API_KEY
    }
  };

  export const IMG_CDN_URL= "https://image.tmdb.org/t/p/w780"

  export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
    {identifier:"telugu" ,name: "Telugu"},
    {identifier:"tamil",name:"Tamil"},
    {identifier:"marathi",name:"Marathi"},
    {identifier:"french",name:"French"}
  ];

  export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY
