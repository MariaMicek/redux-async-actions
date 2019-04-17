const SET = 'users/SET'

export const fetchUsersAsyncActionCreator = () => (dispatch, getState) => {
    fetch('https://randomuser.me/api?results=5')
        .then(response => response.json())
        .then(data => dispatch(
            setUserActionCreator(data.results)
        ))
}

export const setUserActionCreator = users => (
    {
        type: SET,
        users,
    }
)

const initialState = {
    users: null,
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