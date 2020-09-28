import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./components/weather";
import Form from "./components/form";
import axios from "axios";
const App = () => {
  const API_KEY = "";
  const [data, setData] = useState({
    city: undefined,
    country: undefined,
    icon: undefined,
    celcius: undefined,
    temp: undefined,
    min: undefined,
    max: undefined,
    desc: undefined,
    error: false,
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const getWeather = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&units=metric&appid=${API_KEY}`;
    axios
      .get(url)
      .then((response) => {
        const res = response.data;
        const newData = {
          city: res.name,
          country: res.sys.country,
          icon: res.weather[0].icon,
          temp: res.main.temp,
          min: res.main.temp_min,
          max: res.main.temp_max,
          desc: res.weather[0].description,
          error: false,
        };
        console.log(newData);
        setData(newData);
      })
      .catch((err) => setData({ ...data, error: true }));
  };
  return (
    <div className="App">
      <Form {...{ getWeather, handleChange, error: data.error }} />
      <Weather {...{ data }} />
    </div>
  );
};

export default App;
