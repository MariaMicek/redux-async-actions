import { createStore, combineReducers } from 'redux'
import usersReducer from './state/users'

const reducer = combineReducers(
    {
        usersReducer,
    }
)

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)