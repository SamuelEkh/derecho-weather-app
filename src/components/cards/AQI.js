import React from 'react'
import Happy from '../../images/Happy.png'
import Neutral from '../../images/Neutral.png'
import Satisfied from '../../images/Satisfied.png'
import Sick from '../../images/Sick.png'

const AQI = ({ aqi }) => {

  if (aqi) {

    let emoji = '';
    let aqiScore = 0;

      if(aqi.co <= 150) {
        aqiScore += 20;
      } else if (aqi.co > 150 && aqi.co <= 250) {
        aqiScore += 15;
      } else if (aqi.co > 250 && aqi.co <= 400) {
        aqiScore += 10;
      } else if (aqi.co > 400 && aqi.co <= 600) {
        aqiScore += 5;
      }
  


    if(aqi.no2 <= 25) {
      aqiScore += 20;
    } else if (aqi.no2 > 25 && aqi.no2 <= 50) {
      aqiScore += 15;
    } else if (aqi.no2 > 50 && aqi.no2 <= 100) {
      aqiScore += 10;
    } else if (aqi.no2 > 100 && aqi.no2 <= 200) {
      aqiScore += 5;
    }

    if(aqi.o3 <= 30) {
      aqiScore += 20;
    } else if (aqi.o3 > 30 && aqi.o3 <= 50) {
      aqiScore += 15;
    } else if (aqi.o3 > 50 && aqi.o3 <= 100) {
      aqiScore += 10;
    } else if (aqi.o3 > 100 && aqi.o3 <= 200) {
      aqiScore += 5;
    }

    if(aqi.so2 <= 10) {
      aqiScore += 10;
    } else if (aqi.so2 > 10 && aqi.so2 <= 30) {
      aqiScore += 7.5;
    } else if (aqi.so2 > 30 && aqi.so2 <= 60) {
      aqiScore += 5;
    } else if (aqi.so2 > 60 && aqi.so2 <= 200) {
      aqiScore += 2.5;
    }

    if(aqi.pm2_5 <= 2.5) {
      aqiScore += 20;
    } else if (aqi.pm2_5 > 2.5 && aqi.pm2_5 <= 5) {
      aqiScore += 15;
    } else if (aqi.pm2_5 > 5 && aqi.pm2_5 <= 10) {
      aqiScore += 10;
    } else if (aqi.pm2_5 > 10 && aqi.pm2_5 <= 20) {
      aqiScore += 5;
    }

    if(aqi.pm10 <= 5) {
      aqiScore += 10;
    } else if (aqi.pm10 > 5 && aqi.pm10 <= 10) {
      aqiScore += 7.5;
    } else if (aqi.pm10 > 10 && aqi.pm10 <= 20) {
      aqiScore += 5;
    } else if (aqi.pm10 > 20 && aqi.pm10 <= 40) {
      aqiScore += 2.5;
    }

    if (aqiScore >= 85) {
      // setEmoji({Happy}.Happy);
      emoji = {Happy}.Happy;
    } else if (aqiScore >= 75 && aqiScore < 85) {
      emoji = {Satisfied}.Satisfied;
    } else if (aqiScore >= 60 && aqiScore < 75) {
      emoji = {Neutral}.Neutral;
    } else if (aqiScore < 60) {
      emoji = {Sick}.Sick;
    }

    // const regexFix = /\..*/
    // const co = aqi.co.toString().replace(regexFix, '');
    // console.log(co.replace(regexFix, ''))
    // co.replace(regexFix, '')
    return (
      <article className="card">
        <div className="card__aqi">
        <img className="card__aqi--icon" src={emoji} alt="smiley" />
          <div className="card__header">
            Air quality
          </div>
          <div className="card__desc">
            {aqiScore}
          </div>
        </div>
      </article>
    )
  }
  return (
    <article className="card">
      <div className="card__aqi">
        {aqi}
      </div>
    </article>
  )
}

export default AQI;