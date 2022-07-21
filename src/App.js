import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import axios from "axios";
import WeatherArea from "./components/WeatherArea";
import CityArea from "./components/CityArea";
import InputArea from "./components/InputArea";
function App() {
  const [city, setCity] = useState();
  const [show, setShow] = useState("");
  const [weather, setWeather] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
        setError(false)
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setError(err);
        }
      });
  }, [city]);
  return (
    <Grid columns="equal" style={{ height: "100vh", margin: "0px" }}>
      <InputArea setCity={setCity} setShow={setShow} setLoading={setLoading}  />
      <CityArea error={error} show={show} />
      <WeatherArea loading={loading} weather={weather} city={city} />
    </Grid>
  );
}

export default App;
