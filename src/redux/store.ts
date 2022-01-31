import { createStore, applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./slice/quizesSlice"
import { quizzesAPI } from "../services";

const rootReducer = combineReducers({
    reducer,
    [quizzesAPI.reducerPath]: quizzesAPI.reducer
})

const middleware = [thunk, quizzesAPI.middleware]

const store = createStore(rootReducer, applyMiddleware(...middleware))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
