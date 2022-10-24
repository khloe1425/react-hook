import { ADD_COMMENT } from "../types/fakeBookType"

export const addCommentAction = (userComment) => {
    return {
        type: ADD_COMMENT,
        userInfo: {
            ...userComment,
            avatar: `https://i.pravatar.cc/?u=${userComment.username}`
        }
    }
}