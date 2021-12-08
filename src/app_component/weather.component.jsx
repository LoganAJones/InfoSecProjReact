import React from "react";
import "./weather.style.css";

const Weather = props => {
  return (

    <div className="container text-black">
      <div className="Card">
        <h1 className="text-black py-3">{props.cityname}</h1>
        <h5 className="py-4">S
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>

        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="py-2">Current temp: {props.temp_celsius}&deg;</h1>
        ) : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* Weather description */}
        <h4 className="py-3">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>



  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">Low Temp: {min}&deg;</span>
        <span className="px-4">High Temp: {max}&deg;</span>
      </h3>
    );
  }
}
