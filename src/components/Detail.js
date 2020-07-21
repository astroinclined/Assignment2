import React from 'react';
import ReactDOM from 'react-dom'
import {deleteMessage} from '../actions'
import { connect } from 'react-redux';
import axios from 'axios';
class Detail extends React.Component
{
    constructor(props)
    {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);    

    }
    buttonClick = (message)  =>
    {
       
        var object = 
            {
            _id: message,
            }
    
        
        axios.delete("https://assignmentbackend.herokuapp.com/messagess", {data: {_id: message}})
        .then(response => {
          this.props.deleteMessage(response.data)
        })

        
    }
    render()
    {
        return ReactDOM.createPortal(
        <div className='popup'>
            <h1>Date Added:
            {this.props.date}</h1>
            <h1>Length of message: 
            {this.props.length}</h1>
            <h1 >Message:
           {this.props.info}</h1>
           <button onClick = {() => {this.buttonClick(this.props._id)}} >delete</button>
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