import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useEffect, useState } from 'react';

export default function SearchBox({getInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY=import.meta.env.VITE_API_KEY;
;
    

    let getWeatherInfo=async ()=>{
    try{let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        let result={
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        }
        return result;
        }catch(err){
            throw err;
        }
    }

    let handleChange=(event)=>{
        setCity((event.target.value))
    }

    let handleSubmit=async (event)=>{
    try{event.preventDefault();
        let info=await getWeatherInfo();
        getInfo(info);
        setCity("");
        }catch (err){
            setError(true);
        }
    }
    useEffect(function refresh(){
        setError(false);
    },[city])
    return(
        <div className='SearchBox' >
            <h3>Search for the Weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit' >Search</Button>
                <br />
                {error && <p style={{color:"red"}}>No data is available for this place</p>}
            </form>
        </div>
    )
}