import React, { useEffect, useState } from 'react'

function Clock() {
    const [time, setTime] = useState();

    useEffect(() =>{
      setInterval(() =>{
        const date = new Date();
        setTime(date.toLocaleTimeString());
      }, 1000);
    }, []);

  return (
    <div>
        <h3>Clock</h3>
        <p>{time}</p>
    </div>
  )
}

export default Clock