import DayCycle from "./DayCycle"

export default function Degree({ degree }) {

  return (
    <article className="card-upper">
      {/* <img className="card-upper__photo" src='https://picsum.photos/id/251/370/200' alt="weather"/> */}
      <div className="card__degree">
        {degree}°
      </div>
      <DayCycle />
    </article>
  )
}
