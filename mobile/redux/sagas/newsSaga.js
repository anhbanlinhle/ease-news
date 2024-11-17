import { call, put, takeLatest } from 'redux-saga/effects'
import {
  getNewsAction,
  getNewsFailureAction,
  getNewsSuccessAction,
  getAllCategoriesAction,
  getCategorySuccessAction,
  getNewsByCategoryAction
} from "../reducers/newsSlice"

function* getAllNews() {
  try {
    const response = yield call(fetch, 'http://localhost:1111/news/all')
    const data = yield response.json()
    yield put(getNewsSuccessAction(data))
  }
  catch (error) {
    yield put(getNewsFailureAction(error))
  }
}

function* getAllCategories() {
  try {
    const response = yield call(fetch, 'http://localhost:1111/news/categories')
    const data = yield response.json()
    yield put(getCategorySuccessAction(data))
  }
  catch (error) {
    yield put(getNewsFailureAction(error))
  }
}

function* getNewsByCategory({ payload }) {
  try {
    const response = yield call(fetch, `http://localhost:1111/news/category`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: payload })
    })
    const data = yield response.json()
    yield put(getNewsSuccessAction(data))
  }
  catch (error) {
    yield put(getNewsFailureAction(error))
  }
}

export function* watchGetNewsData() {
  yield takeLatest(getNewsAction().type, getAllNews)
  yield takeLatest(getAllCategoriesAction().type, getAllCategories)
  yield takeLatest(getNewsByCategoryAction().type, getNewsByCategory)
}
