import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import { WeatherAPIData } from './WeatherAPIData';

function SearchBox({updateInfo , handleError}){

let [city , setCity] = useState("");


   let handleInput = (event) => {
     setCity(event.target.value);
   }

   let handleForm = async (event) => {
    try{
    event.preventDefault();
    let weatherData = await WeatherAPIData(city);
    updateInfo(weatherData);
    setCity("");
    }
    catch(error){
      handleError();
    }
   }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleForm}>
            <TextField 
            type = "text"
            id="city" 
            label="City" 
            variant="outlined" 
            value = {city} 
            onChange={handleInput}
            required/>  

             <br /> <br />

            <Button variant="contained" type = "submit">Search</Button>
            </form>
            
        </div>
    )
};

export default SearchBox;