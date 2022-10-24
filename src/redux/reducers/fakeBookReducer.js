import { ADD_COMMENT } from "../types/fakeBookType"

// rxreducer
const initialState = {
    mangComment: [
        { username: "user123", avatar: "https://i.pravatar.cc/?u=77", comment: "ahihihi" },
        { username: "user456", avatar: "https://i.pravatar.cc/?u=78", comment: "ahihihi" }
    ]
}

export const fakeBookReducer = (state = initialState, action) => {
    switch (action.type) {
        //các type cần chuyển thành biến để quản lý (tránh hardcode)
        case ADD_COMMENT:
            // console.log(action);
            state.mangComment = [...state.mangComment,action.userInfo]

            return { ...state }
        default:
            return state
    }
}
