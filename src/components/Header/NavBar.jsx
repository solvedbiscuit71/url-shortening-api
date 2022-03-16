function NavBar(props) {
  return ( 
    <div className="navbar" style={{display: props.display ? "flex" : "none"}}>
      <ul className="nav-list">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>

      <div className="seperator"></div>

      <div className="btn-flex">
        <button className="btn--link">Login</button>
        <button className="btn--primary">Sign Up</button>
      </div>
    </div>
  );
}

export default NavBar;