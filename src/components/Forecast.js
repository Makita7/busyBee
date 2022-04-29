import axios from "axios";
import { useState } from "react";
import useForecast from "../hooks/useForecast";
import ForecastInner from "./ForecastInner";
import Search from "./Search";
import Error from "../Error/Error";


function Forecast() {
  const { error, loading, forecast, SubmitRequest } = useForecast();
  // const SubmitRequest = ( locations ) =>{
  //   console.log({ locations });
  // }

  const onSubmit = (value) => {
    //console.log({value});
    SubmitRequest(value);
  }

  // const Request = async where =>{
  //   const RES = await axios (`${Loacation}`)
  // }

  return (
    <div>
      { loading && <p>loading...</p> }
      { !loading && <Search submitSearch={onSubmit}/> }
      { error && <Error message='location is incorrect'/> }
      { forecast && <ForecastInner/> }
    </div>
  );
}

export default Forecast;