import React from 'react';
import Detail from './Detail'

class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
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
        <div><button onClick={this._onButtonClick} className="messageButton" >
            {this.state.open ? <Detail key= {this.props.key} info ={this.props.text}/>  : null}
            <p>{this.props.text}</p></button></div>
        )
    }
  
}

export default Message;