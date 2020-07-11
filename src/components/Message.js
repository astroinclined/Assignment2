import React from 'react';
import Detail from './Detail'
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6

class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
        this._onButtonClick = this._onButtonClick.bind(this);    
       
    
    }
    _onButtonClick()
    {
        if (this.state.open === false){
            this.setState({
                open:true,
            });
        }
        else{
            this.setState({
                open:false,
            });
        }
      
    }
    render()
    {
        return(
        <div><button onClick={this._onButtonClick} className="messageButton">
            {this.state.open ? <Detail _id= {this.props._id} date={this.props.date.toString()} length ={this.props.length} info ={this.props.text}/>  : null}
            <p>{this.props.text}</p></button></div>
            
        )
    }
  
}

export default Message;