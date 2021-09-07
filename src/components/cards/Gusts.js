import React from 'react'

const Gusts = ({ gusts }) => {

  return (
    <article className="card">
      <div className="card__gusts">
      <div className="card__header">
          Gusts
        </div>
        <span className="card__desc">
          {gusts}
          <div className="card__wind--ms">
          m/s
        </div>
        </span>
      </div>
    </article>
  )
}

export default Gusts;