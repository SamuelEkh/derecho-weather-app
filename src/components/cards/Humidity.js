import React from 'react'

const Humidity = ({ humidity }) => {
  return (
    <article className="card">
      <div className="card__humidity">
        <div className="card__header">
          Humidity
        </div>
        <div className="card__desc">
        {humidity}%
        </div>
      </div>
    </article>
  )
}

export default Humidity;