import * as actions from '../actions/actions.js'

const initialState = {
    view: 'home',
    selectedAnswer: "",
    page: 1,
    error: "",
    selecteda: "",
    selectedb: "",
    selectedc: "",
    selectedd: "",
}

export const reducer = (state = initialState, action) => {

    if (action.type === actions.CHANGE_VIEW) {
        return Object.assign({}, state, {
            view: action.view
        })
    }

    else if (action.type === actions.TOGGLE_ANSWERA) {
        return Object.assign({}, state, {
            selectedAnswer: action.answer,
            selecteda: "a",
            selectedb: "",
            selectedc: "",
            selectedd: "",
        })
    }

    else if (action.type === actions.TOGGLE_ANSWERB) {
        return Object.assign({}, state, {
            selectedAnswer: action.answer,
            selecteda: "",
            selectedb: "b",
            selectedc: "",
            selectedd: "",
        })
    }

    else if (action.type === actions.TOGGLE_ANSWERC) {
        return Object.assign({}, state, {
            selectedAnswer: action.answer,
            selecteda: "",
            selectedb: "",
            selectedc: "c",
            selectedd: "",
        })
    }

    else if (action.type === actions.TOGGLE_ANSWERD) {
        return Object.assign({}, state, {
            selectedAnswer: action.answer,
            selecteda: "",
            selectedb: "",
            selectedc: "",
            selectedd: "d",
        })
    }

    else if (action.type === actions.WRONG_ANSWER) {
        return Object.assign({}, state, {
            view: "incorrect",
            selectedAnswer: "",
            selecteda: "",
            selectedb: "",
            selectedc: "",
            selectedd: "",
            error: ""
        })
    }
    
    else if (action.type === actions.RIGHT_ANSWER){
        return Object.assign({}, state, {
            view: "correct",
            page: action.page,
            selectedAnswer: "",
            selecteda: "",
            selectedb: "",
            selectedc: "",
            selectedd: "",
            error: ""
        })
    }

    else if (action.type === actions.ERROR) {
        return Object.assign({}, state, {
            error: "Please Select an Answer Choice"
        })
    }

    return state
}