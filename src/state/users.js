const SET = 'users/SET'

export const fetchUsersAsyncActionCreator = (numberOfUsers = 1) => (dispatch, getState) => {        //passing some extra arguments through external function
    fetch('https://randomuser.me/api?results=' + numberOfUsers)
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