import axios from "axios";
import { useState } from "react";

const KEY = 'Zt6SkKGsxV6CetGhxg5JSa1XSKBi9rP1';
const Location = 'http://dataservice.accuweather.com/locations/v1/cities/ipaddress';
const BASE_URl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${Location}`;
const CROSS_DOMAIN = 'http://the-ultimate-api-challange.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URl}`;

const useForecast = () => {
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ forecast, setForecast ] = useState(null);
  
  const SubmitRequest = ( locations ) =>{
    // const { data } = await axios(`${REQUEST_URL}/search`,{params: { queries:locations }});
    console.log({ locations });

    // if(!data || data.length === 0){
    //     setError('No such location');
    //     return;
    // }

    // const response = await axios(`${REQUEST_URL}/${data[0].woeld}`);
    // console.log(response);
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