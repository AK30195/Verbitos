
function Card({ header, text, link }) {
  return (
    <div className="card-container">
      <div>
        <h2>{header}</h2>
      </div>
      <div>
        <p>{text}</p>
      </div>
      <div className="hero-button-div">
        <a className="hero-button" href={link}>
          Explore
        </a>
      </div>

    </div>
  )
}

export default Card;