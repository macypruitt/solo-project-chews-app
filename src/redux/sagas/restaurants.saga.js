import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getApprovedList(){
    try{
      const response = yield axios.get('/api/restaurants/approved');
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

  function* getAdminList(){
    try{
      const response = yield axios.get('api/restaurants/all');
      yield put({type: 'SET_ADMIN', payload: response.data});
    }
    catch(err){
      console.log('Error retrieving admin list', err);
    }
  }

  function* getEditItem(action){
    try{
      const response = yield axios.get(`api/restaurants/single/${action.payload}`);
      yield put({type: 'SET_EDIT', payload: response.data});
    }
    catch(err){
      console.log('Error retrieving single item to edit', err);
    }
  }

  function* updateEditItem(action){
    try{
      yield axios.put(`/api/admin/edit`, action.payload);
    }
    catch(err){
      console.log('Error editing listing', err);
    }
  }

  function* deleteListing(action){
    try{
      const response = yield axios.delete(`api/admin/delete/${action.payload}`);
    }
    catch(err){
      console.log('Error retrieving single item to edit', err);
    }
  }




function* restaurantsSaga() {
    yield takeLatest('GET_PINS', getApprovedList);
    yield takeLatest('SEND_SUBMIT', postNewSubmission);
    yield takeLatest('GET_ADMIN', getAdminList);
    yield takeLatest('GET_EDIT', getEditItem);
    yield takeLatest('PUT_EDIT', updateEditItem);
    yield takeLatest('DELETE_LISTING', deleteListing)
    //yield takeLatest('POST_DB', postToDatabase);
  }
  
  export default restaurantsSaga;