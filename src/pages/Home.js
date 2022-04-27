import Clock from '../components/Clock';
import Date from '../components/Date';
import Temperature from '../components/Temperature';
import MoonPhase from '../components/MoonPhases';

function Home() {
  return (
    <div>
        <Clock/>
        <Date/>
        <Temperature/>
        <MoonPhase/>
    </div>
  );
}

export default Home;