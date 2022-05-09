import axios from "axios";
import {  useContext, useState } from "react";
import CurrentDay from "../components/CurrentDay";
import { ForecastContext } from "../components/ForecastContext";
import { WeekForecast, CurrentDayForecast, CurrentDayForecastDetail } from "./FormatData";

//const KEY = 'Zt6SkKGsxV6CetGhxg5JSa1XSKBi9rP1';
//const Location = 'http://dataservice.accuweather.com/locations/v1/cities/ipaddress';
const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;


export const useForecast = () => {
  //context
  const { forecast, setForecast } = useContext(ForecastContext);

  // const [ forecast, setForecast ] = useState(null);
  const [ currentDay, setcurrentDay ] = useState(null);
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
    
    const response = await getWoeid(location);
    const data = await getForecastData(response[0].woeid);
    
    //console.log({data});
    
    GatherForecast(data);
    
  }

  console.log(forecast);

    return (
      forecast,
      // forecast,
        // currentDay,
        // to export functions you have to put the function in {} otherwise it will tell you it's not a function
        {SubmitRequest}
  );
}

