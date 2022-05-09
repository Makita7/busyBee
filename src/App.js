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

import { LoadingContext } from './components/LoadingContext';
import { useState } from 'react';
import { ForecastContext } from './components/ForecastContext';

function App() {
  const [ loading, setLoading ] = useState(false);
  const [ forecast, setForecast ] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <ForecastContext.Provider value={{ forecast, setForecast }}>
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
      </ForecastContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
