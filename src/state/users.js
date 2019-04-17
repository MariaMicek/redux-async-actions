const SET = 'users/SET'
const FETCH_START = 'users/FETCH_START'
const FETCH_END = 'users/FETCH_END'
const FETCH_FAILED = 'users/FETCH_FAILED'

export const fetchUsersAsyncActionCreator = (numberOfUsers = 1) => (dispatch, getState) => {        //passing some extra arguments through external function
    dispatch(fetchStartActionCreator())

    fetch('https://randomuser.me/api?results=' + numberOfUsers)
        .then(response => response.json())
        .then(data => dispatch(
            setUserActionCreator(data.results)
        ))
        .catch(() => {
            dispatch(fetchFailedActionCreator())
        })
        .finally(() => {
            dispatch(fetchEndActionCreator())
        })
}

const setUserActionCreator = users => (
    {
        type: SET,
        users,
    }
)

const fetchStartActionCreator = () => (
    {
        type: FETCH_START
    }
)

const fetchEndActionCreator = () => (
    {
        type: FETCH_END
    }
)

const fetchFailedActionCreator = () => (
    {
        type: FETCH_FAILED
    }
)


const initialState = {
    users: null,
    isLoading: false,
    isError: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET:
            return {
                ...state,
                users: action.users,
            }
        case FETCH_START:
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case FETCH_END:
            return {
                ...state,
                isLoading: false,
            }
        case FETCH_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        default:
            return state
    }
}


