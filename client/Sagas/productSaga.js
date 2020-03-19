import {put, all, takeEvery} from 'redux-saga/effects';
import Axios from '../Axios';

function* addProduct(action) {
  const body = JSON.stringify(action.payload);
  try {
    const res = yield Axios.post('/signup', body);
    if (res.status == 200) {
      yield put({type: 'REGISTER_SUCCESS', payload: action.payload.product});
    } else throw res.error;
  } catch (error) {
    console.log(error);
  }
}

function* AddProductSaga() {
  //using takeEvery, you take the action away from reducer to saga
  yield takeEvery('SIGN_UP', addProduct);
}

////////////////////////////////////////////

// function* getProductsSaga() {
//   try {
//     const res = yield Axios.get('/all');
//     if (res.status == 200) {
//       yield put({type: 'ALL_PRODUCTS', payload: res.data});
//     } else throw res.error;
//   } catch (error) {
//     console.log(error);
//   }
// }

// function* GetProductss() {
//   //using takeEvery, you take the action away from reducer to saga
//   yield takeEvery('GET_PRODUCTS', getProductsSaga);
// }

////////////////////////////////////////////

function* getResultSaga(action) {
  const body = action.payload.name;
  //console.log('bodysaga' + body);
  try {
    const res = yield Axios.get(`/result/${body}`);
    if (res.status == 200) {
      yield put({type: 'RESULT', payload: res.data});
    } else throw res.error;
  } catch (error) {
    console.log(error);
  }
}

function* GetResult() {
  //using takeEvery, you take the action away from reducer to saga
  yield takeEvery('GET_RESULT', getResultSaga);
}

/////////////////////////////////////////////

function* getSearchSaga(action) {
  const body = action.payload.name;
  //console.log('bodysaga' + body);
  try {
    const res = yield Axios.get(`/search/${body}`);
    if (res.status == 200) {
      yield put({type: 'SEARCH', payload: res.data});
    } else throw res.error;
  } catch (error) {
    console.log(error);
  }
}

function* GetSearch() {
  //using takeEvery, you take the action away from reducer to saga
  yield takeEvery('GET_SEARCH', getSearchSaga);
}

////////////////////////////////////////////

function* getListSaga(action) {
  const cat = action.payload.cat;
  const num = action.payload.num;
  try {
    const res = yield Axios.get(`/list/${num}/${cat}`);
    if (res.status == 200) {
      yield put({type: cat, payload: res.data}); //dispatch action to the reducer of specipic category and update the list
    } else throw res.error;
  } catch (error) {
    console.log(error);
  }
}

function* GetList() {
  //using takeEvery, you take the action away from reducer to saga
  yield takeEvery('GET_LIST', getListSaga);
}

////////////////////////////////////////////

export default function* ReviewSagas() {
  yield all([
    AddProductSaga(),
    //GetProductss(),
    GetResult(),
    GetSearch(),
    GetList(),
  ]);
}
