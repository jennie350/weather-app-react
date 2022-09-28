import React from "react";

import Search from "./Search";
import LocationButton from "./LocationButton";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="invisible-wrapper">
          <div className="WeatherAppWrapper">
            <div className="row">
              <Search />
              <LocationButton />
            </div>
            <CurrentWeather />
            <Forecast />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}