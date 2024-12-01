import { call, takeLatest } from "redux-saga/effects";
import {
	getNewsAction,
	getAllCategoriesAction,
	getNewsByCategoryAction,
	getReduplicationInNewsAction,
} from "../reducers/newsSlice";

const API_URL = "192.168.1.20";

function* getAllNews(action) {
	const data = action.payload?.data;
	const onSuccess = action.payload?.onSuccess;
	const onFail = action.payload?.onFail;
	try {
		const response = yield call(fetch, `http://${API_URL}:1111/news/all`);
		const data = yield response.json();
		onSuccess?.(data);
	} catch (error) {
		onFail?.(error);
	}
}

function* getAllCategories(action) {
	const data = action.payload?.data;
	const onSuccess = action.payload?.onSuccess;
	const onFail = action.payload?.onFail;
	try {
		const response = yield call(
			fetch,
			`http://${API_URL}:1111/news/categories`
		);
		const data = yield response.json();
		onSuccess?.(data);
	} catch (error) {
		onFail?.(error);
	}
}

function* getNewsByCategory(action) {
	const body = action.payload?.category;

	const onSuccess = action.payload?.onSuccess;
	const onFail = action.payload?.onFail;
	try {
		const response = yield call(fetch, `http://${API_URL}:1111/news/category`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ category: body }),
		});
		const data = yield response.json();
		onSuccess?.(data);
	} catch (error) {
		onFail?.(error);
	}
}

function* getReduplicationInNews(action) {
	const body = action.payload?.content;
	const onSuccess = action.payload?.onSuccess;
	const onFail = action.payload?.onFail;

	try {
		const response = yield call(
			fetch,
			`http://${API_URL}:1111/dict/check_reduplication`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					text: body,
				}),
			}
		);
		const data = yield response.json();
		onSuccess?.(data);
	} catch (error) {
		onFail?.(error);
	}
}

export function* watchGetNewsData() {
	yield takeLatest(getNewsAction().type, getAllNews);
	yield takeLatest(getAllCategoriesAction().type, getAllCategories);
	yield takeLatest(getNewsByCategoryAction().type, getNewsByCategory);
	yield takeLatest(getReduplicationInNewsAction().type, getReduplicationInNews);
}
