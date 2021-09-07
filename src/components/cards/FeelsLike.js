import React from 'react'

const FeelsLike = ({ feels_like }) => {
  return (
    <article className="card">
      <div className="card__feels-like">
        <div className="card__header card__feels-like--header">
          Feels like
        </div>
        <div className="card__desc card__feels-like--degree">
          {feels_like}°
        </div>
      </div>
    </article>
  )
}

export default FeelsLike;
