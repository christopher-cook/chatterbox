import React, {Component} from 'react';

class Chat extends Component {
  render() {
    return (
    <h4>Individual Chat called here</h4>
    {this.props.convoArray[0].name}
    )
  }
}

export default Chat;
