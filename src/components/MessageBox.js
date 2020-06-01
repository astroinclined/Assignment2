import React from 'react';
import Message from './Message';
import { addMessage } from '../actions'
import { connect } from 'react-redux';
import Detail from './Detail';
class MessageBox extends React.Component{
    render()
    {
        return(
            <div >
           <div id="messageBox">
            {this.props.messages.map((item, key) => <Message key ={item.id} text={item}/>)}
           </div>
           <textarea value = {this.setState.value} onChange={(event) => this.setState({text: event.target.value})} id="input"></textarea>
            <button onClick= {() => this.props.addMessage(this.state.text, this.setState({ state: this.state }))}>add message</button>
           </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { 
    messages: state.messages
};
}



export default connect(mapStateToProps, { addMessage })(MessageBox);