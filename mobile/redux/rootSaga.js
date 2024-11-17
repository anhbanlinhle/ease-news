import { fork, all } from 'redux-saga/effects';
import { watchGetSampleData } from './sagas/sampleSaga';
import { watchGetNewsData } from './sagas/newsSaga';

const rootSaga = function* () {
  yield all([
    fork(watchGetSampleData),
    fork(watchGetNewsData)
  ])
}

export default rootSaga;
