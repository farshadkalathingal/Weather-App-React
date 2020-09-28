import React from "react";

const Weather = ({ data }) => {
  const { city, country, temp, desc, min, max, icon } = data;
  return (
    <div className="App">
      <div className="cards">
        <h1>
          {city}, {country ? country : ""}
        </h1>
        <h5 className="py-4">
          {icon && (
            <img
              src={`https://openweathermap.org/img/w/${icon}.png`}
              alt="{city}"
            />
          )}
        </h5>
        <h1 className="py-2">{temp ? temp : ""}&deg;</h1>
        {minmax(min, max)}
        <h4 className="py-2">{desc ? desc : desc}</h4>
      </div>
    </div>
  );
};

function minmax(min, max) {
  return (
    <h3>
      <span className="px-4">{min ? min : ""}&deg;</span>
      <span className="px-4">{max ? max : ""}&deg;</span>
    </h3>
  );
}

export default Weather;
