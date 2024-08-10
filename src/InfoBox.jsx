import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import { weatherImg } from './weatherImgUrl';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function InfoBox({weatherinfo}){
    return (
        <div className="InfoBox">
           <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image = {weatherinfo.humidity >= 80 ? weatherImg.rainy : weatherinfo.temp < 25 ? weatherImg.coldImg : weatherinfo.temp > 50 ? weatherImg.hot : weatherImg.sunny }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" component = {"span"}>
           <div className='name-icon'>
            <h2> {weatherinfo.name} 
              <span>
              {weatherinfo.humidity >= 80 ? <UmbrellaIcon></UmbrellaIcon> : weatherinfo.temp <= 25 ? <AcUnitIcon></AcUnitIcon> : <WbSunnyIcon></WbSunnyIcon>}
              </span>
            </h2>
            </div>
         <p>Temprature : {weatherinfo.temp}&deg;C</p>
         <p>Humidity: {weatherinfo.humidity}&deg;C</p>
         <p>Min Temp: {weatherinfo.tempMin}&deg;C</p>
         <p>Min Temp: {weatherinfo.tempMax}&deg;C</p>
         <p>The weather can be described as  <i>{weatherinfo.weather}</i> and feels Like {weatherinfo.feelLike}&deg;C</p>
        </Typography>
      </CardContent>
    
    </Card>
    </div>
    )
}

export default InfoBox;