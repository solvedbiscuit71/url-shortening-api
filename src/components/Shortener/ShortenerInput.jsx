function ShortenerInput(props) {
  return ( 
    <div className="shortener-input">
      <label htmlFor="shortener-input">
        <input className={props.showWarning ? "show-warning" : ""} type="text" id="shortener-input" placeholder="Shorten a link here..." />
        <span style={{display: props.showWarning ? "block" : "none"}}>Please add a link</span>
      </label>

      <button className="btn--primary">Shorten It!</button>
    </div>
  );
}

export default ShortenerInput;