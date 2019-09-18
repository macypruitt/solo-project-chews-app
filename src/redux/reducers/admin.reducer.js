const adminReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ADMIN':
        return action.payload;
      default:
        return action;
    }
  };
  
 
  export default adminReducer;
  