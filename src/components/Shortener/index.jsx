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
      shortendList: []
    }
  }

  handleInput = (value) => {
    /* Here, value is the value of the input element in <ShortenerInput />*/
    this.setState({
      showWarning: false,
      url: value
    })
  }

  handleClick = () => {
    if (this.state.url === "") {
      this.setState({
        showWarning: true,
        warningCode: 1
      })
      return
    }

    fetch("https://api.shrtco.de/v2/shorten", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      redirect: 'follow',
      body: new URLSearchParams({
        url: this.state.url
      })
    })
      .then(data => data.json())
      .then(data => {
        if (data.ok) {
          const newList = this.state.shortendList.concat({
            original: data.result.original_link,
            shortend: data.result.full_short_link,
            copied: false
          })
          localStorage.setItem('shortendList', JSON.stringify(newList));

          this.setState({
            shortendList: newList
          })
        } else {
          if (data.error_code === 2) {
            this.setState({
              showWarning: true,
              warningCode: 0
            })
          }
        }
      })
      .catch(error => console.log(error))
  }

  handleCopy = (copyText) => {
    navigator.clipboard.writeText(copyText)

    const newList = this.state.shortendList.slice(0);
    newList.forEach(item => {
      if (item.shortend === copyText) {
        item.copied = true;
      }
    })
    localStorage.setItem('shortendList', JSON.stringify(newList));
    this.setState({
      shortendList: newList
    })
  }

  componentDidMount() {
    const newList = JSON.parse(localStorage.getItem('shortendList'))
    if (newList) {
      this.setState({
        shortendList: newList
      })
    }
  }

  render() {
    return (
      <section className="shortener">
        <ShortenerInput showWarning={this.state.showWarning} warningCode={this.state.warningCode} handleInput={this.handleInput} handleClick={this.handleClick} />
        {
          this.state.shortendList.slice(0).reverse().map(item => {
            return <Shortend original={item.original} shortend={item.shortend} copied={item.copied} handleCopy={this.handleCopy} />
          })
        }
      </section>
    )
  }
}

export default Shortener;