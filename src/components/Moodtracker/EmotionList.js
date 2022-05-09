import VeryHappy from '../../assets/expressions/veryhappy.png';
import Happy from '../../assets/expressions/happy.png';
import Content from '../../assets/expressions/Content.png';
import Sad from '../../assets/expressions/sad.png';
import Angry from '../../assets/expressions//angry.png';
import Relaxed from '../../assets/expressions/relaxed.png';
import Bored from '../../assets/expressions/bored.png';
import Anxious from '../../assets/expressions/anxious.png';
import { useContext } from 'react';
import { MoodContext } from './MoodContext';

export const SingleEmotion = ({mood}) =>{
    return(
      <img alt='emotion' src={mood}/>
    );
  }



export const ListEmotions = () =>{
    const { mood, setMood } = useContext(MoodContext);
    const Emotion = ({alt, src}) =>{
      return(
        <img alt={alt} src={src} onClick={() => Click({src})}/>
      );
    }

    const Click = ({src}) =>{
        setMood({src});
    }

  
    return(
      <div>
        <div>
          <Emotion alt='very happy' src={VeryHappy} />
          <Emotion alt='happy' src={Happy} />
          <Emotion alt='content' src={Content} />
          <Emotion alt='sad' src={Sad} />
        </div>
        <div>
          <Emotion alt='angry' src={Angry} />
          <Emotion alt='relaxed' src={Relaxed} />
          <Emotion alt='bored' src={Bored} />
          <Emotion alt='anxious' src={Anxious} />
        </div>
      </div>
    );
  }