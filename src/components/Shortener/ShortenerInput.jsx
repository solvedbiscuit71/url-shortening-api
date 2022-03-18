function ShortenerInput(props) {
  return ( 
    <div className="shortener-input">
      <label htmlFor="shortener-input">
        <input onInput={(event) => props.handleInput(event.target.value)} className={props.showWarning ? "show-warning" : ""} type="text" id="shortener-input" placeholder="Shorten a link here..." />
        <p style={{display: props.showWarning ? "block" : "none"}}>
          <span>
            {props.warningCode === 1 ? "Please add a link" : "Invalid url"}
          </span>
        </p>
      </label>

      <button onClick={props.handleClick} className="btn--primary">Shorten It!</button>
    </div>
  );
}

export default ShortenerInput;