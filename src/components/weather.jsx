import React from 'react';

const Weather = (props) => {
    return (
        <div className='App'>
            <div className="cards">
    <h1>{props.city}, {props.country}</h1>
                <h5 className="py-4">
                    <img src={`https://openweathermap.org/img/w/${props.icon}.png`} alt="{props.city}"/>
                </h5>
                <h1 className="py-2">
                    {props.temp}&deg;
                </h1>
                {minmax(props.min,props.max)}
                <h4 className="py-2">
                    {props.desc}
                </h4>
            </div>
        </div>
    )
}

function minmax(min, max) {
    return (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );
}

export default Weather;