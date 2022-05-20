import { SingleEmotion, ListEmotions } from '../components/Moodtracker/EmotionList';
import { useState, useEffect } from 'react';
import { MoodContext } from '../components/Moodtracker/MoodContext';
import MoodCalendar from '../components/Moodtracker/MoodCalendar';


const Moodtracker = () =>{
  const [ mood, setMood ] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('mood')
    if (data !== null) setMood(JSON.parse(data));
  }, [])

  useEffect(() =>{
    // console.log('fire');
    localStorage.setItem('mood', JSON.stringify(mood));
  }, [mood]);

  return (
    <MoodContext.Provider value={{mood, setMood}}>
      <div>
        { !mood &&
          <>
            <h3 className='moodTitle'>How are you Feeling?</h3>
            <div>
              <ListEmotions setMood={setMood} mood={mood}/>
            </div>
          </>
        }
        { mood &&
          <>
            <h3 className='moodTitle'>You're mood Today</h3>
            <SingleEmotion mood={mood.src}/><br/>
            <button className='moodBtn' onClick={() => setMood(false)}>Change Emotion?</button>
          </>
        }

        <MoodCalendar/>
        
      </div>
    </MoodContext.Provider>
  );
}

export default Moodtracker;