import React from 'react'

const Condition = ({ condition, conditionPhoto }) => {

  const photoRegex = /^\/\//
  let cleanPhoto = ''

  if (conditionPhoto) {
    cleanPhoto = conditionPhoto.replace(photoRegex, 'https://');
    // const photoStyle = {
    //   backgroundImage: `url(${cleanPhoto})`,
    //   width: '5rem',
    // }
   
   const conditionStyle = {
     marginTop: '7px',
    //  margin: '0.4rem 0 0 4rem',
     padding: '0',
     fontSize: '2rem'
   }

   if ({condition}.condition.length > 7 && {condition}.condition.length <= 13) {
     conditionStyle.fontSize = '1.5rem'
    //  conditionStyle.margin = '0.3rem 0 0 4rem'
   } else if ({condition}.condition.length > 13) {
     conditionStyle.fontSize = '1.2rem';
     conditionStyle.marginTop =  '10px';
    //  conditionStyle.margin = '0.4rem 0 0 4rem'
    //  conditionStyle.paddingRight = '3rem';
   }

  
    
    return (
      <article className="card">
        <div className="card__condition">
          <img className="card__condition--photo" src={cleanPhoto} alt={condition} />
          <div className="card__header card__condition--header">
            Weather condition
          </div>
          <div className="card__condition-desc" style={conditionStyle}>
            {condition}
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="card">
      <div className="card__Condition">
        N/A
      </div>
    </article>
  )
}

export default Condition;
