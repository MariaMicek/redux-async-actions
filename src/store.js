import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './state/users'
import counterReducer, { startCounterSyncAsyncActionCreator } from './state/counter'

const reducer = combineReducers(
    {
        usersReducer,
        counterReducer
    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch( startCounterSyncAsyncActionCreator())