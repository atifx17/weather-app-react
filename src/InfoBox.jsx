import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';

export default function InfoBox({weatherInfo:info}){
    let INIT_HOT="https://media.istockphoto.com/id/871349918/photo/beautiful-sunset-city-bokeh.webp?a=1&b=1&s=612x612&w=0&k=20&c=y_sukja__MpE9tJLfBNIufyrdSCrfWVu5qdqqqpYL3U="
    let INIT_COLD="https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    let INIT_RAIN="https://images.unsplash.com/photo-1589799790421-178330f91cfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW55fGVufDB8fDB8fHww";
    //init data
    
    // let info={
    //     city:"Delhi",
    //     feelsLike:39.89,
    //     humidity:8,
    //     temp:43.49,
    //     tempMax:43.49,
    //     tempMin:43.49,
    //     weather:"broken clouds"
    // } 

    return (
        <>
        {info && (<div className='InfoBox'>
            <h1>WeatherInfo-{info.weather}</h1>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?INIT_RAIN:(info.temp>20?INIT_HOT:INIT_COLD)}
                        title="green iguana"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity>80?<CloudySnowingIcon/>:(info.temp>20?<SunnyIcon/>:<AcUnitIcon/>)}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin-2}</p>
                            <p>Max Temp = {info.tempMax+2}</p>
                            <p>The weather can be described as <b><i>{info.weather}</i></b> and feels like <b>{info.feelsLike}&deg;C</b></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>)}
        </>
    )
}