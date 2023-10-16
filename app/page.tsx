import Hero from './components/Hero';
import Restaurants from './components/Restaurants';
import Cuisines from './components/Cuisines';
import DownloadApp from './components/DownloadApp';

const Home = () => {
  return (
    <>
      <Hero />
      <Cuisines />
      <Restaurants />
      <DownloadApp />
    </>
  );
};

export default Home;
