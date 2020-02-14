import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { REQUEST_API_DATA, receiveApiData } from "../actions/index"
import { fetchData } from '../api/index'

const getApiData = (action) => {
    try {
        const data = yield call(fetchData)
        yield put(receiveApiData(data))
    } catch (e) {
        console.log(e)
    }
}

export const mySaga = () => {
    yield takeLatest(REQUEST_API_DATA, getApiData)
}