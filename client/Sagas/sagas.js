import {all} from 'redux-saga/effects';
import ProductSaga from './productSaga';

//combine all sagas

export default function* Sagas() {
  yield all([ProductSaga()]);
}
