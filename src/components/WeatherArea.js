import React from 'react';
import setBackground from "../consts/global"
import { Card,Grid } from 'semantic-ui-react';
const WeatherArea = ({loading,weather,city}) => {
    return (
        <>
        <Grid.Row className='main-content' style={{backgroundImage:`url(${setBackground(city)})`}}>
        {loading?''
           : <Card id='main-card'>
           <div>{weather.weather[0].main.toUpperCase()}</div>
           <p>{weather.main.temp?`${Math.round(weather.main.temp)}°C`:''} </p>
  
       </Card>
        }
      </Grid.Row>
      </>
    );
   
};

export default WeatherArea;