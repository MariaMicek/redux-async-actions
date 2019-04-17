import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './state/users'

const reducer = combineReducers(
    {
        usersReducer,
    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose     //poinformowanie devtoolsów, że korzystamy z middleware

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)  //dodatek do reduxa, który umożliwia wykonywanie operacji asynchronicznych
    )
)
