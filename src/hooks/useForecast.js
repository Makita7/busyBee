import axios from "axios";
import { useState } from "react";

//const KEY = 'Zt6SkKGsxV6CetGhxg5JSa1XSKBi9rP1';
//const Location = 'http://dataservice.accuweather.com/locations/v1/cities/ipaddress';
const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;


const useForecast = () => {
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ forecast, setForecast ] = useState(null);
  
  const getWoeid = async ( location ) => {
    const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location } });
    console.log({ data });
  
    if(!data || data.length === 0){
        setError('No such location');
        return;
    }

    return data;

  }

  const getForecastData = async ( woeid ) => {
    const { data } = await axios(`${REQUEST_URL}/${woeid}`);

    if(!data || data.length === 0){
      setError('Something went wrong!');
      return;
  }

    return data;

  }

  const SubmitRequest = async ( location ) =>{
    setLoading(true);
    setError(false);
    
    const response = await getWoeid(location);
    const data = await getForecastData(response[0].woeid);

    console.log({data});

  }


    return (
        error,
        loading,
        forecast,
        // to export functions you have to put the function in {} otherwise it will tell you it's not a function
        {SubmitRequest}
  );
}

export default useForecast;