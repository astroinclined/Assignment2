import React from "react";
import Message from "./Message";
import { addMessage, yeetMessages } from "../actions/index";
import { connect } from "react-redux";
import Detail from "./Detail";
import axios from "axios";
import ReactCSSTransitionGroup from "react-transition-group"; // ES6

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
    axios
      .get("https://assignmentbackend.herokuapp.com/messages")
      .then((response) => {
        console.log(response.data);
        response.data.forEach((message) => {
          this.props.addMessage(message);
          this.setState({ state: this.state });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  buttonClick = () => {
    var object = {
      message: this.state.text,
      date: new Date(),
      length: this.state.text.length,
    };

    axios
      .post("https://assignmentbackend.herokuapp.com/messages", object)
      .then((response) => {
        this.props.addMessage(response.data);
        this.setState({ state: this.state });
      });
  };
  clear = () => {
    this.props.yeetMessages();
    axios.delete("https://assignmentbackend.herokuapp.com/messages/clear");
  };
  render() {
    return (
      <div>
        <div id="messageBox">
          {this.props.messages.map((item, key) => (
            <Message
              _id={item._id}
              yeet={key}
              date={item.date}
              length={item.length}
              text={item.message}
            />
          ))}
        </div>
        <textarea
          value={this.setState.value}
          onChange={(event) => this.setState({ text: event.target.value })}
          id="input"
        ></textarea>
        <button onClick={this.buttonClick}>add message</button>
        <button onClick={this.clear}>clear messages</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

export default connect(mapStateToProps, { addMessage, yeetMessages })(
  MessageBox
);
