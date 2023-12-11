import { all, fork } from "redux-saga/effects";
import { watchGetMeals } from "./mealsMiddleware";

const rootSaga = function* () {
  yield all([
    fork(watchGetMeals),
  ]);
};

export default rootSaga;