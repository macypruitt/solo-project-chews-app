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
      yield axios.post('/api/maps', action.payload);
      //console.log('saga', action.payload)
    }
    catch(err) {
      console.log('ERROR in post', err)
    }
  }



function* restaurantsSaga() {
    yield takeLatest('GET_PINS', getApprovedList);
    yield takeLatest('SEND_SUBMIT', postNewSubmission)
  }
  
  export default restaurantsSaga;