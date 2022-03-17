function Card(props) {
  return (
    <div className="card">
      <div className="card__icon">
        <img src={props.image} alt={props.alt} />
      </div>

      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;