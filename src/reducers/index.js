
import {combineReducers } from 'redux';
import app from '../components/App';

const counterReducer = (count = 0, action) => {
    if(action.type === 'INCREMENT_COUNTER'){
        return count + action.increment; 
    }
    else if(action.type === 'DECREMENT_COUNTER')
    {
        return count - action.decrement;
    }
    return count;
};

const messageReducer = (messages = [], action) =>
{
    if(action.type === 'ADD_MESSAGE')
    {
        messages.push(action.addMessage);
        return messages;
    }
    else if(action.type === 'DELETE')
    {
        
        const nu = messages.filter(item =>  item._id != action.deleteMessage)
       messages  = nu
         return messages;
    }
    else if(action.type === 'CLEAR')
    {
       messages = [];
       console.log("hit")
        return messages;
    }
    return messages;
};

export default combineReducers({
    count: counterReducer,
    messages: messageReducer
  //all your reducers should be combined
});
