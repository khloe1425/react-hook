import { USERLOGIN } from "../../util/setting"

//chứa userLogin từ local storage
let uLogin = null;

if(localStorage.getItem(USERLOGIN)){
    //có local storage
    uLogin = JSON.parse(localStorage.getItem(USERLOGIN));
}

const initialState = {
    uLogin:uLogin
}

export const QLNDReducer = (state = initialState, action) => {
    switch (action.type) {

        case "LOGIN":
            
            state.uLogin = action.uLogin;

            return { ...state }
        default:
            return state
    }
}
