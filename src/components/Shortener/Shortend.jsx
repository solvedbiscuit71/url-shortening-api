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
          <button className="btn--primary">Copy</button> :
          <button className="btn--secondary">Copied!</button>
        }
      </div>
    </div>
  );
}

export default Shortend;