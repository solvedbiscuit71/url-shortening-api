function Shortend(props) {
  /*
  props: {
    original: string,
    shortend: string,
    copied: boolean
  }
  */

  return (
    <div className="shortend">
      <p className="original-url">{props.original}</p>
      <div className="seperator"></div>

      <div className="shortend-url-container">
        <p className="shortend-url">{props.shortend}</p>
        {
          props.copied ?
          <button className="btn--secondary">Copied!</button> :
          <button className="btn--primary" onClick={() => props.handleCopy(props.shortend)}>Copy</button>
        }
      </div>
    </div>
  );
}

export default Shortend;