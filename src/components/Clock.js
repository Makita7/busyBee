//import { useEffect, useState } from 'react';
import moment from "moment";

function Clock() {
    
  //withought moment js
  // const [time, setTime] = useState();

  //   useEffect(() =>{
  //     setInterval(() =>{
  //       const date = new Date();
  //       setTime(date.toLocaleTimeString());
  //     }, 1000);
  //   }, []);

  let Time = moment().format('h:mm');
  let TimeTwo = moment().format('A');

  return (
    <div className="clock flexbox">
        <p>{Time}</p>
        <p className="pm">{TimeTwo}</p>
    </div>
  )
}

export default Clock