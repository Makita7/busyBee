import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div className='navFooter'>
        <Link to="/">HOME</Link>
        <Link to="/moodT">MOOD</Link>
        <Link to="/toDo">TO DO</Link>
        <Link to="/radio">RADIO</Link>
        <Link to="/Confiq">CONFIQ</Link>
    </div>
  );
}

export default Nav;