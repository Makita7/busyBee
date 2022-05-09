// import {useForecast, Try} from "../hooks/useForecast";
import axios from "axios";
import React, {  useContext, useState } from "react";
import { ForecastContext } from "../components/ForecastContext";
import { WeekForecast, CurrentDayForecast, CurrentDayForecastDetail } from "../hooks/FormatData";
import Search from "./Search";
import Loader from "./Loader";
import { LoadingContext } from "../components/LoadingContext";


const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;


function Forecast() {  
  const { loading, setLoading } = useContext(LoadingContext);
  // const { currentDay, SubmitRequest } = useForecast();

  const { forecast, setForecast } = useContext(ForecastContext);

  // const [ forecast, setForecast ] = useState(null);
  const [ currentDay, setcurrentDay ] = useState('input location');
  const [ currentDayDetail, setCurrentDayDetail ] = useState(null);
  const [ upcommingDays, setUpcommingDays ] = useState(null);


  const getWoeid = async ( location ) => {
    const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location } });
    //console.log({ data });
  
    if(!data || data.length === 0){
        return;
    }

    return data;

  }

  const getForecastData = async ( woeid ) => {
    const { data } = await axios(`${REQUEST_URL}/${woeid}`);

    if(!data || data.length === 0){
      return;
  }

    return data;
    
  }
  
  const GatherForecast = data => {
    const CurrentDay = CurrentDayForecast(data.consolidated_weather[0], data.title);
    const CurrentDayDetail = CurrentDayForecastDetail(data.consolidated_weather[0]);
    const UpcommingDays = WeekForecast(data.consolidated_weather);

    setForecast({ CurrentDay, CurrentDayDetail, UpcommingDays});
    setcurrentDay({ CurrentDay });
    setCurrentDayDetail({ CurrentDayDetail });
    setUpcommingDays({ UpcommingDays});
    //console.log(forecast);

  }

  const SubmitRequest = async ( location ) =>{
    
    const response = await getWoeid( location );
    const data = await getForecastData(response[0].woeid);
    
    
    GatherForecast(data);
    
  } 
  
  
  console.log({...currentDay});


  const onSubmit = (value) => {
    //console.log({value});
    setLoading(true);
    setTimeout(() => {
      SubmitRequest(value);
      setLoading(false);
    }, '4000');
  }

  const CurrentDayInfo = ({ weekday, date, location, temperature, weatherIcon, weatherDescription }) => {
    console.log(date);
      return(
    <div>
        {weekday} {date} {location} {temperature}
    </div>
      );
  };
    

  return (
    <div>
        { loading && <Loader/> }
        <Search submitSearch={onSubmit} />

        <CurrentDayInfo {...currentDay}/>
    </div>
  );
}

export default Forecast;


