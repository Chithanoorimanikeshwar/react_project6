import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./middleware/root-saga";
import mealStore from "./features/meals"
const sagaMiddleware=createSagaMiddleware()
const store=configureStore({
    reducer:{
        mealStore
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga);
export default store 