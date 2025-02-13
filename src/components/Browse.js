import Header from './Header'
import NowPlaying from '../hooks/NowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Popular from "../hooks/Popular"
import TopRated from "../hooks/TopRated"
import Upcoming from "../hooks/Upcoming"
import Trending from '../hooks/Trending';


const Browse = () => {
  NowPlaying();
  Popular();
  TopRated();
  Upcoming();
  Trending();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {
        /* 
          MainContainer
            - VideoBackground
            - VideoTitle
          SecondaryContainer
            - MoviesList * n
            - MovieCards * n
        */

        
      }
    </div>
  )
}

export default Browse
