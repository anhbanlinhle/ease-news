import { call, takeLatest } from 'redux-saga/effects'
import {
  getNewsAction,
  getAllCategoriesAction,
  getNewsByCategoryAction
} from "../reducers/newsSlice"

function* getAllNews(action) {
  const data = action.payload?.data;
  const onSuccess = action.payload?.onSuccess;
  const onFail = action.payload?.onFail;
  try {
    const response = yield call(fetch, 'http://127.0.0.1:1111/news/all')
    const data = yield response.json()
    onSuccess?.(data)
  }
  catch (error) {
    onFail?.(error)
  }
}

function* getAllCategories(action) {
  const data = action.payload?.data;
  const onSuccess = action.payload?.onSuccess;
  const onFail = action.payload?.onFail;
  try {
    const response = yield call(fetch, 'http://127.0.0.1:1111/news/categories')
    const data = yield response.json()
    onSuccess?.(data)
  }
  catch (error) {
    onFail?.(error)
  }
}

function* getNewsByCategory(action) {
  const body = action.payload?.category;

  const onSuccess = action.payload?.onSuccess;
  const onFail = action.payload?.onFail;
  try {
    const response = yield call(fetch, `http://127.0.0.1:1111/news/category`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: body })
    })
    const data = yield response.json()
    onSuccess?.(data)
  }
  catch (error) {
    onFail?.(error)
  }
}

export function* watchGetNewsData() {
  yield takeLatest(getNewsAction().type, getAllNews)
  yield takeLatest(getAllCategoriesAction().type, getAllCategories)
  yield takeLatest(getNewsByCategoryAction().type, getNewsByCategory)
}
