import Clock from '../components/Clock';
import Day from '../components/Day';
import Forecast from '../components/Forecast';
import MoonPhase from '../components/MoonPhases';
import Search from '../components/Search';

function Home() {
  return (
    <div className=''>
        <Clock/>
        <Day/>
        {/* <Search/> */}
        <Forecast/>
        <MoonPhase/>
    </div>
  );
}

export default Home;