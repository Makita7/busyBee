import Clock from '../components/Clock';
import Day from '../components/Date';
import Temperature from '../components/Temperature';
import MoonPhase from '../components/MoonPhases';

function Home() {
  return (
    <div>
        <Clock/>
        <Day/>
        <Temperature/>
        <MoonPhase/>
    </div>
  );
}

export default Home;