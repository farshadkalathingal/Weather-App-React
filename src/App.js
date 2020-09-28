import React from 'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/weather'
import Form from './components/form';

const API_KEY = '746b075d4cba50898cc9a62d17b53910'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      celcius: undefined,
      temp: undefined,
      min: undefined,
      max: undefined, 
      desc:undefined,
      error: false
    };
    this.getWeather();
  }

  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    
    if (city) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);

      const response = await api_call.json()
      console.log(response)
      this.setState({
        city: response.name,
        country: response.sys.country,
        icon: response.weather[0].icon,
        temp: response.main.temp,
        min: response.main.temp_min,
        max: response.main.temp_max,
        desc: response.weather[0].description
      })
    } else {
      this.setState({
        error: true
      });
    }
  }

  render() {
    return (
      <div className="App">
      <Form loadweather={this.getWeather} error={this.state.error}/>
      <Weather city={this.state.city} country={this.state.country} temp={this.state.temp} min={this.state.min} max={this.state.max} icon={this.state.icon} desc={this.state.desc}/>
    </div>
    );
  }
}


export default App;
