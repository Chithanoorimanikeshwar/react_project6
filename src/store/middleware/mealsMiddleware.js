import axios from "axios"
import { put, takeLatest } from "redux-saga/effects";
import {fetchMealsCategoryList,
    fetchMealTypesList,
    fetchMealRecepie,
    SuccessAction,
    FailedAction,
    } from '../features/meals'

function* fetchMealData(action){
    try{
        console.log(action.type)

        const response=yield axios.get(action.payload)
        yield put(SuccessAction({
            updateField:action.type.split('/')[1].slice(5).toLowerCase(),
            response:response.data
        }))
    }
    catch(error){
        console.log(error.message)
        yield put(FailedAction(error.message))
    }
}


// Generator function
export function* watchGetMeals() {
    yield takeLatest(fetchMealsCategoryList.type, fetchMealData);
    yield takeLatest(fetchMealTypesList.type,fetchMealData);
    yield takeLatest(fetchMealRecepie.type,fetchMealData);
  }