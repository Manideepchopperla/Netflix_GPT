import Header from './Header'
import NowPlaying from '../hooks/NowPlaying'
import MainContainer from './MainContainer';

const Browse = () => {
  NowPlaying();
  return (
    <div>
      <Header />
      <MainContainer />
      {/* <SecondaryContainer /> */}
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
