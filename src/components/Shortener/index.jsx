import React, { Component } from 'react';
import Shortend from './Shortend';
import ShortenerInput from './ShortenerInput';

class Shortener extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showWarning: false,
      shortendList : [
        {
          original: "https://frontendmentor.io/",
          shortend: "https://rep.ink/Ks83ksg/",
          copied: false
        },
        {
          original: "https://frontendmentor.io/",
          shortend: "https://rep.ink/Ks83ksg/",
          copied: true
        },
        {
          original: "https://frontendmentor.io/",
          shortend: "https://rep.ink/Ks83ksg/",
          copied: false
        }
      ]
    }
  }

  render() {
    return (
      <section className="shortener">
        <ShortenerInput showWarning={this.state.showWarning} />
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