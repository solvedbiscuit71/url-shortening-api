import React, { Component } from 'react';
import Shortend from './Shortend';
import ShortenerInput from './ShortenerInput';

class Shortener extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showWarning: true,
      warningCode: 1, // can take either zero(invalid url) or one(url empty).
      shortendList : []
    }
  }

  render() {
    return (
      <section className="shortener">
        <ShortenerInput showWarning={this.state.showWarning} warningCode={this.state.warningCode} />
        {
          this.state.shortendList.map(item => {
            return <Shortend original={item.original} shortend={item.shortend} copied={item.copied} />
          })
        }
      </section>

    )
  }
}
 
export default Shortener;