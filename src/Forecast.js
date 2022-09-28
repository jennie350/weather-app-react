import React from "react";

export default function Forecast() {
  return (
    <div className="weeklyWeather">
      <div className="row">
        <div className="col-2">
          <div className="weatherForcastDay">
            {" "}
            Sat
            <div className="weeklyWeatherIcon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather icon"
                width="50"
              />
            </div>
            <div className="weeklyWeatherTempRange">
              <span className="weeklyWeatherMaxTemp">20° </span>
              <span className="weeklyWeatherMinTemp">8° </span>
            </div>
          </div>
        </div>

        <div className="col-2">
          <div className="weatherForcastDay">
            {" "}
            Sun
            <div className="weeklyWeatherIcon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather icon"
                width="50"
              />
            </div>
            <div className="weeklyWeatherTempRange">
              <span className="weeklyWeatherMaxTemp">20° </span>
              <span className="weeklyWeatherMinTemp">8° </span>
            </div>
          </div>
        </div>

        <div className="col-2">
          <div className="weatherForcastDay">
            {" "}
            Mon
            <div className="weeklyWeatherIcon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather icon"
                width="50"
              />
            </div>
            <div className="weeklyWeatherTempRange">
              <span className="weeklyWeatherMaxTemp">20° </span>
              <span className="weeklyWeatherMinTemp">8° </span>
            </div>
          </div>
        </div>

        <div className="col-2">
          <div className="weatherForcastDay">
            {" "}
            Tue
            <div className="weeklyWeatherIcon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather icon"
                width="50"
              />
            </div>
            <div className="weeklyWeatherTempRange">
              <span className="weeklyWeatherMaxTemp">20° </span>
              <span className="weeklyWeatherMinTemp">8° </span>
            </div>
          </div>
        </div>

        <div className="col-2">
          <div className="weatherForcastDay">
            {" "}
            Wed
            <div className="weeklyWeatherIcon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather icon"
                width="50"
              />
            </div>
            <div className="weeklyWeatherTempRange">
              <span className="weeklyWeatherMaxTemp">20° </span>
              <span className="weeklyWeatherMinTemp">8° </span>
            </div>
          </div>
        </div>

        <div className="col-2">
          <div className="weatherForcastDay">
            {" "}
            Thu
            <div className="weeklyWeatherIcon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather icon"
                width="50"
              />
            </div>
            <div className="weeklyWeatherTempRange">
              <span className="weeklyWeatherMaxTemp">20° </span>
              <span className="weeklyWeatherMinTemp">8° </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
