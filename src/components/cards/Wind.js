import React from 'react'

const Wind = ({ wind }) => {
  let windStr = wind/3.6
  if (wind === 0) {
    windStr = 'N/A'
  }
  const keepRegex = /\../
  const decimals = windStr.toString().match(keepRegex);
  windStr = windStr.toString().replace(/\..+/, decimals)

  return (
    <article className="card">
      <div className="card__wind">
        <div className="card__header">
          Wind
        </div>
        <span className="card__desc">
          {windStr}
          <div className="card__wind--ms">
          m/s
        </div>
        </span>
      </div>
    </article>
  )
}

export default Wind;