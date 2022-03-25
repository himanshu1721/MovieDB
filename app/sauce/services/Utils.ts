import { put, call } from "redux-saga/effects";

export function* callApi(api: any, onSuccess: any, onFailure: any): any {
  const response = yield call(api);
  yield handleResponse(response, onSuccess, onFailure);
}
export function* handleResponse(response: any, onSuccess: any, onFailure: any) {
  if (response.ok) {
    yield put(onSuccess(response.data));
  } else {
    yield put(onFailure(response.problem));
  }
}
