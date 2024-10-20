import { fork, all } from 'redux-saga/effects';
import { watchGetSampleData } from './sagas/sampleSaga';

const rootSaga = function* () {
  yield all([
    fork(watchGetSampleData)
  ])
}

export default rootSaga;
