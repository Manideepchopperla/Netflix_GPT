import Header from './Header'
import NowPlaying from '../hooks/NowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Popular from "../hooks/Popular"
import TopRated from "../hooks/TopRated"
import Upcoming from "../hooks/Upcoming"
import Trending from '../hooks/Trending';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';


const Browse = () => {
  NowPlaying();
  Popular();
  TopRated();
  Upcoming();
  Trending();
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  return (
    <div className='w-[100vw] bg-black'>
      <Header />
    {showGptSearch?
      (<GptSearchPage />):
      (<>
        <MainContainer />
        <SecondaryContainer />
      </>)
    }
    </div>
  )
}

export default Browse
