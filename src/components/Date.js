import { useEffect, useState } from 'react';

function Day( separator=' ' ) {
  let newDate = new Date();
  let date = `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`;

  return (
    <div>
        <h3>Date</h3>
        <p>{date}</p>
    </div>
  );
}

export default Day;