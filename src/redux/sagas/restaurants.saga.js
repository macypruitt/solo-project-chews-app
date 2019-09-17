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

function* restaurantsSaga() {
    yield takeLatest('GET_PINS', getApprovedList);
  }
  
  export default restaurantsSaga;