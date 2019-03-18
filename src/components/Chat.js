import React, { Component } from 'react';
import Form from './Form.js';

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      feed: '',
      static: true
    }
  }
  changeState = () => {
    this.setState({
      static: !this.state.static  //changes static state
    })
  }
componentDidMount() {
  if(this.props.updatedChat) {
    this.setState({
      static: true
  })
  }
}
  render() {
    return (
      <div className="chatLog">

      {this.state.static ? //will show on page if true
        <div className="chatz">
        {this.props.convo.name}<br />
        {this.props.convo.feed}<br /><button onClick={this.changeState}>Edit</button>
        </div> :
      <div className="chatzEdit">
        <Form
          chat={this.props.chat}
          handleCheck={this.props.handleCheck}
          arrayIndex={this.props.arrayIndex}
          changeState={this.changeState}
        />
      </div>
      }
      </div>
    )
  }
}

export default Chat;
