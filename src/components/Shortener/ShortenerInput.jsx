function ShortenerInput(props) {
  return ( 
    <div className="shortener-input">
      <label htmlFor="shortener-input">
        <input onInput={(event) => props.handleInput(event.target.value)} className={props.showWarning ? "show-warning" : ""} type="text" id="shortener-input" placeholder="Shorten a link here..." />
        <span style={{display: props.showWarning ? "block" : "none"}}>{props.warningCode === 1 ? "Please add a link" : "Invalid url"}</span>
      </label>

      <button className="btn--primary">Shorten It!</button>
    </div>
  );
}

export default ShortenerInput;