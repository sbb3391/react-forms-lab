import React from "react";

class TwitterMessage extends React.Component {
  
    state = {
      message: '',
      remainingCharacters: this.props.maxChars
    }

  remainingCharacters = (string) => {
    let messageCharacters = Number(string.length)
    return this.props.maxChars - messageCharacters
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      remainingCharacters: this.remainingCharacters(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <div>{this.state.remainingCharacters}</div>
      </div>
      
    );
  }
}

export default TwitterMessage;
