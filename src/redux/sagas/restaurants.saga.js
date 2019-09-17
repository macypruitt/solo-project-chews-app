import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getApprovedList(){
    try{
      const response = yield axios.get('/api/restaurants');
      yield put({type: 'SET_PINS', payload: response.data});
    }
    catch(err) {
      console.log('ERROR in GET', err)
    }
  }

  function* postNewSubmission(action){
    try{
      const response = yield axios.post('/api/maps', action.payload);
      
      //console.log('saga', action.payload)
      console.log('with lat and lng added:', response.data);
    }
    catch(err) {
      console.log('ERROR in post', err)
    }
  }

  // function* postToDatabase(action){
  //   try{
  //     const response = yield axios.post('/api/maps', action.payload);
      
  //     //console.log('saga', action.payload)
  //     console.log('chhhhh', response.data);
  //   }
  //   catch(err) {
  //     console.log('ERROR in post', err)
  //   }
  // }



function* restaurantsSaga() {
    yield takeLatest('GET_PINS', getApprovedList);
    yield takeLatest('SEND_SUBMIT', postNewSubmission);
    //yield takeLatest('POST_DB', postToDatabase);
  }
  
  export default restaurantsSaga;