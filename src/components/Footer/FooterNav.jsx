function FooterNav(props) {
  /* 
  props: {
    navlist: string[] -> injected to <li></li>
  }
  */

  return (
    <div className="footer-nav">
      <h3>{props.navTitle}</h3>
      <ul className="footer-navlist">
        {props.navList.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default FooterNav;