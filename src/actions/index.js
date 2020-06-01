export const increment = amount => {
  return {
    type: 'INCREMENT_COUNTER',
    increment: amount,
  };
};

export const decrement =  amount => {
  return{
    type:'DECREMENT_COUNTER',
    decrement: amount
  };
};

export const addMessage = message =>
{
  return{
    type: 'ADD_MESSAGE',
    addMessage: message
  };
};

export const deleteMessage = key =>
{
  return{
    type:'DELETE',
    deleteMessage: key

  };
};

