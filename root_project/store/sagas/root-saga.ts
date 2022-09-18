import { takeEvery, all, fork } from 'redux-saga/effects';
import photosWatchAll from './photos-saga';

function* rootSaga() {
  yield all([fork(photosWatchAll)]);
}

export default rootSaga;
