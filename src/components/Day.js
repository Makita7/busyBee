//import dayjs from 'dayjs';
import moment from "moment";


function Day() {
  
  //with ought dayJS
  
  //let newDate = new Date();
  //let date = `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`;
  //let today = `${dayjs(newDate.getDay())}`;
  
  //with dayJS
  // let Day = dayjs().day();
  // let Date = dayjs().format('MMMM DD - YYYY');
  // let Time = dayjs().format('HH:mm A');

  //using moment js
  let Day = moment().format('dddd').toUpperCase();
  let DayNum = moment().format('do');
  let Year = moment().format("MMMM YYYY");  
  //let Date = moment().format("MMM Do YY");  

  
  return (
    <div className="date">
        <p className="day">{Day} {DayNum}</p>
        <p className="year">{Year}</p>
    </div>
  );
}

export default Day;