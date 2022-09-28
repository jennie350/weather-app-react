import React from "react";

export default function CurrentWeather() {
  return (
    <div>
      <div className="row">
        <div className="col-9">
          <h1>London</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <span className="dayDate">Last updated: Friday 12:55</span>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=""
            className="float-left"
          />
        </div>
        <div className="col-3">
          <span className="temp">20</span>
          <span className="units">
            <a href="/" className="active">
              °C
            </a>{" "}
            |<a href="/">°F</a>
          </span>
          <div className="feelsLike">
            Feels like <span>18</span>°C
          </div>
        </div>
        <div className="col-4">
          <div className="currentWeather">Sunny</div>
          <ul>
            <li>
              Wind speed <span>12</span> km/h
            </li>
            <li>
              Humidity <span>68</span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
