import { database } from '../firebaseConfig'

const GET = 'counter/GET'

export const startCounterSyncAsyncActionCreator = () => (dispatch, getState) => {
    database.ref('/counter/').on(
        'value',
        (snapshot) => dispatch(getActionCreator(snapshot.val()))
    )
}

export const incAsyncActionCreator = () => (dispatch, getState) => {
    const state = getState()
    const currentNumber = state.counterReducer.number
    if (currentNumber !== null) database.ref('/counter/').set(currentNumber + 1)
}

export const stopCounterSyncAsyncActionCreator = () => (dispatch, getState) => {
    database.ref('/counter').off()
}

const getActionCreator = number => ({
    type: GET,
    number
})

const initialState = {
    number: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET:
            return {
                ...state,
                number: action.number
            }
        default:
            return state
    }
}