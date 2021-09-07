import React from 'react'

const UVIndex = ({ UVIndex }) => {
  return (
    <article className="card">
      <div className="card__uv-index">
        <div className="card__header card__uv--header">
          UV Index
        </div>
        <div className="card__desc card__uv--desc">
          {UVIndex}
        </div>
      </div>
    </article>
  )
}

export default UVIndex;
