import { combineReducers, createStore, applyMiddleware } from "redux";

import { fakeBookReducer } from "./reducers/fakeBookReducer";
import { phimReducer } from "./reducers/phimReducer";

//cài đặt Middleware
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    //khai báo reducer
    fakeBookReducer,
    phimReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));