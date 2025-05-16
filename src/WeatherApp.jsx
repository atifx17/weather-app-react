import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';


export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState();
    let getInfo=(info)=>{
        setWeatherInfo(info);
    }
    return(
        <div>
            <SearchBox getInfo={getInfo}/>
            <InfoBox weatherInfo={weatherInfo} />
        </div>
    )
}