import React from "react";

const WeatherCard = ({ tempInfo }) => {
  let sec = new Date(tempInfo.sunset * 1000);
  let time = `${sec.getHours()}:${sec.getMinutes()}`;

  return (
    <div>
      <article className="widget">
        <div className="weatherIcon">
          <i className={"wi wi-day-sunny"}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{tempInfo.temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{tempInfo.weathermood}</div>
            <div className="place">
              {tempInfo.name},{tempInfo.country}
            </div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleString()}</div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {time} <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {tempInfo.humidity} <br />
                humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {tempInfo.pressure} <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {tempInfo.speed} <br />
                Wind
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default WeatherCard;
