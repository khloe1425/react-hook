// rxreducer
const initialState = {
    mangComment:[
        {username:"user123",avatar:"https://i.pravatar.cc/?u=77",comment:"ahihihi"},
        {username:"user456",avatar:"https://i.pravatar.cc/?u=78",comment:"ahihihi"}
    ]
}

export const fakeBookReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}
