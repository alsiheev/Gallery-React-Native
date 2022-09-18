import { call, takeEvery, put, all, fork } from 'redux-saga/effects';
import {
  updatePhotosArray,
  setIsLoading,
  errorPhotos,
} from '../reducers/photos';
import { photosActions } from './photos-actions';
import Config from 'react-native-config';

export function* photoInitSaga() {}

export function* photosUpdateSaga(action = { page: 1 }) {
  try {
    const page = action.page;
    const api = `https://api.unsplash.com/photos?client_id=${Config.API_KEY}&page=${page}`;
    yield put(setIsLoading());
    // @ts-ignore
    let result = yield call(() => fetch(api, {}).then(res => res.json()));
    yield put(updatePhotosArray(result));
  } catch (error) {
    yield put(errorPhotos(error));
    console.error(error);
  }
}

export function* photosUpdateWatcherSaga() {
  yield takeEvery(photosActions.UPDATE_PHOTOS, photosUpdateSaga);
}

function* photosWatchAll() {
  yield all([fork(photosUpdateWatcherSaga)]);
}

export default photosWatchAll;
