import Clock from '../components/Clock';
import Day from '../components/Day';
import Forecast from '../components/Forecast';
import MoonPhase from '../components/MoonPhases';

function Home() {

  return (
    <div className=''>
        <Clock/>
        <Day/>
        <Forecast/>
        <MoonPhase/>


        {/* <p>{ test ? 'test is true' : 'test is false' }</p> */}

    </div>
  );
}

export default Home;