import { combineReducers, createStore, applyMiddleware } from "redux";

import { fakeBookReducer } from "./reducers/fakeBookReducer";
import { phimReducer } from "./reducers/phimReducer";


//cài đặt Middleware
import thunk from "redux-thunk";
import { QLNDReducer } from "./reducers/QLNDReducer";

const rootReducer = combineReducers({
    //khai báo reducer
    fakeBookReducer,
    phimReducer,
    QLNDReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));