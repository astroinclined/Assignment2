
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

const messageReducer = (messages = ["nullam nec est vel. Eros aenean in. Mauris imperdiet, sit litora lectus aliquam. Varius phasellus libero nunc, sollicitudin nec in, dignissim suspendisse ut commodo metus sed, omnis consequat semper. Dolor excepturi volutpat dui porttitor vel, bibendum amet ac enim ac vestibulum suspendisse. Natoque pede tortor interdum duis, id in, scelerisque sed inceptos dolor pretium sed aliquam.", "default","Henlo","Yeeeet"], action) =>
{
    if(action.type === 'ADD_MESSAGE')
    {
        messages.push(action.addMessage);
        return messages;
    }
    else if(action.type === 'DELETE')
    {
        
        const nu = messages.filter(item =>  item != action.deleteMessage)
       messages  = nu
         return messages;
    }
    return messages;
};

export default combineReducers({
    count: counterReducer,
    messages: messageReducer
  //all your reducers should be combined
});
