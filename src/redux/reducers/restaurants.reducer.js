const restaurantsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PINS':
        return action.payload;
      default:
        return action;
    }
  };
  
 
  export default restaurantsReducer;
  