import { call, put, takeLatest } from 'redux-saga/effects';
import { getDataAction, getDataFailureAction, getDataSuccessAction } from "../reducers/sampleSlice";

function* getSampleData() {
  try {
    const response = yield call(fetch, 'http://127.0.0.1:1111/songs');
    const data = yield response.json();
    yield put(getDataSuccessAction(data));
  } catch (error) {
    yield put(getDataFailureAction(error));
  }
}

export function* watchGetSampleData() {
  yield takeLatest(getDataAction().type, getSampleData);
}
