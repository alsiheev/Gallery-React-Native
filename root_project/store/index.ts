import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import photosReducer from './reducers/photos';
import rootSaga from './sagas/root-saga';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: { photos: photosReducer },
  middleware,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
