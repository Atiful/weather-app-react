import { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';


function WeatherApp(){
    let [loading , setLoading] = useState(false);
    let [error , setError] = useState(false);
    const [weather, setWeather] = useState(null);


    let handleError = () => {
        setError(true);
        setWeather(null);
        setTimeout(() => {
            setError(false);
        }, 3000);
    }

    
    let updateInfo = async (result) => {
        setLoading(true);
        try{
            await new Promise((resolve) => setTimeout(resolve, 700));
           setWeather(result);
        }finally{
            setLoading(false);
        }
    }

    return (
        <>
        <h1 style = {{textAlign : "center"}}>Live weather App</h1>
        <SearchBox updateInfo = {updateInfo} handleError = {handleError}></SearchBox>
          {
          loading  ? ( <div style = {{textAlign : "center"}}>
          <CircularProgress></CircularProgress> </div> ) : error ?  <Alert severity="error">This is not found in thr API.</Alert> : weather ? 
          (<InfoBox weatherinfo = {weather}></InfoBox> ) : null
          }
        </>
    )
}

export default WeatherApp;