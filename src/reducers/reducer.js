import * as actions from '../actions/actions.js'

const initialState = {
    view: 'home',
    selectedAnswer: "",
    page: 1,
    error: ""
}

export const reducer = (state = initialState, action) => {

    if (action.type === actions.CHANGE_VIEW) {
        return Object.assign({}, state, {
            view: action.view
        })
    }

    else if (action.type === actions.TOGGLE_ANSWER) {
        return Object.assign({}, state, {
            selectedAnswer: action.answer
        })
    }

    else if (action.type === actions.WRONG_ANSWER) {
        return Object.assign({}, state, {
            view: "incorrect"
        })
    }
    
    else if (action.type === actions.RIGHT_ANSWER){
        return Object.assign({}, state, {
            view: "correct",
            page: action.page
        })
    }

    else if (action.type === actions.ERROR) {
        return Object.assign({}, state, {
            error: "Please Select an Answer Choice"
        })
    }

    return state
}