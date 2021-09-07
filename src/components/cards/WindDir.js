import React from 'react'

const WindDir = ({ windDir }) => {

  return (
    <article className="card">
      <div className="card__windDir">
        <div className="card__header">
          Wind direction
        </div>
        <div className="card__desc">
          {windDir}
        </div>
      </div>
    </article>
  )
}

export default WindDir;