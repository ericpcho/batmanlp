import * as actions from '../actions/actions.js'

const initialState = {
    view: 'question1'
}

export const reducer = (state = initialState, action) => {

    if (action.type === actions.START_QUIZ) {
        return Object.assign({}, state, {
            view: "question1"
        })
    }

    if (action.type === actions.ANSWER_QUESTION) {
        return Object.assign({}, state, {
            view: action.answer
        })
    }

    if (action.type === actions.ANSWER_WRONG) {
        return Object.assign({}, state, {
            view: action.answer
        })
    }

    return state
}