const SET = 'users/SET'

export const setUserActionCreator = users => (
    {
        type: SET,
        users,
    }
)

const initialState = {
    users: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET:
            return {
                ...state,
                users: action.users,
            }
        default:
            return state
    }
}