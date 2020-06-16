import React from 'react';
import ReactDOM from 'react-dom'
import {deleteMessage} from '../actions'
import { connect } from 'react-redux';
class Detail extends React.Component
{
    render()
    {
        return ReactDOM.createPortal(
        <div className='popup'>
            Date Added:
            {this.props.date}
            Length of message: 
            {this.props.length}
            Message:
           {this.props.info}
           <button onClick = {()=> this.props.deleteMessage(this.props.info, this.setState({state: this.state}))} >delete</button>
        </div>, document.getElementById("root")
        )
        
    };
}
const mapStateToProps = (state) => {
    return { 
    messages: state.messages
};
}


export default connect(mapStateToProps, { deleteMessage })(Detail);