import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/moodT">moodT</Link>
        <Link to="/toDo">toDo</Link>
        <Link to="/radio">radio</Link>
        <Link to="/Confiq">Confiq</Link>
    </div>
  );
}

export default Nav;