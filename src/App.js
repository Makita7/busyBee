import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* PAGES */
import Home from './pages/Home';
import MoodT from './pages/Moodtracker';
import ToDo from './pages/ToDoList';
import Radio from './pages/Radio';
import Confiq from './pages/Configurations';
/* COMPONENTS */
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="">
          <div className='container text-center'>
            {/* first tab */}
              <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/moodT" element={<MoodT/>}/>
                <Route path="/toDo" element={<ToDo/>}/>
                <Route path="/radio" element={<Radio/>}/>
                <Route path="/Confiq" element={<Confiq/>}/>

              </Routes>
              
              <Nav/>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
