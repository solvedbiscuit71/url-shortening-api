import React, { Component } from 'react';
import Shortend from './Shortend';
import ShortenerInput from './ShortenerInput';

class Shortener extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showWarning: false,
      warningCode: 1, // can take either zero(invalid url) or one(url empty).
      url: "",
      shortendList : []
    }
  }

  handleInput = (value) => {
    /* Here, value is the value of the input element in <ShortenerInput />*/
    if (value === "") {
      this.setState({
        url: value,
        showWarning: true,
        warningCode: 1
      })
    }else {
      this.setState({
        url: value,
        showWarning: false,
      })
    }
  }

  render() {
    return (
      <section className="shortener">
        <ShortenerInput showWarning={this.state.showWarning} warningCode={this.state.warningCode} handleInput={this.handleInput} />
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