function ShortenerInput(props) {
  return ( 
    <div className="shortener-input">
      <div className="input-container">
        <label htmlFor="shortener-input">
          <input onInput={(event) => props.handleInput(event.target.value)} id="shortener-input" className={props.showWarning ? "show-warning" : ""} type="text" placeholder="Shorten a link here..." />
        </label>
        <div style={{display: props.showWarning ? "block" : "none"}}>
          <span>
            {props.warningCode === 1 ? "Please add a link" : "Invalid url"}
          </span>
        </div>
      </div>

      <button onClick={props.handleClick} className="btn--primary">Shorten It!</button>
    </div>
  );
}

export default ShortenerInput;