import Clock from '../components/Clock';
import Day from '../components/Day';
import Temperature from '../components/Temperature';
import MoonPhase from '../components/MoonPhases';

function Home() {
  return (
    <div className=''>
        <Clock/>
        <Day/>
        <Temperature/>
        <MoonPhase/>
    </div>
  );
}

export default Home;