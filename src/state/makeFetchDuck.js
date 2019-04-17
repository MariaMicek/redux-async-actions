export const makeFetchDuck = (duckName, url) => {
    const SET = duckName + '/SET'
    const FETCH_START = duckName + '/FETCH_START'
    const FETCH_END = duckName + '/FETCH_END'
    const FETCH_FAILED = duckName + '/FETCH_FAILED'

    const fetchUsersAsyncActionCreator = () => (dispatch, getState) => {
        dispatch(fetchStartActionCreator())

        fetch(url)
            .then(response => response.json())
            .then(data => dispatch(
                setUserActionCreator(data)
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

    const reducer = (state = initialState, action) => {
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

    return {
        fetchAsyncActionCreator: fetchUsersAsyncActionCreator,
        reducer,
    }
}