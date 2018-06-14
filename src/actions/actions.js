export const CHANGE_VIEW = 'CHANGE_VIEW';
export const changeView = (view) => ({
    type: CHANGE_VIEW,
    view
})

export const TOGGLE_ANSWER = 'TOGGLE_ANSWER';
export const toggleAnswer = (answer) => ({
    type: TOGGLE_ANSWER,
    answer
})

export const RIGHT_ANSWER = 'RIGHT_ANSWER';
export const rightAnswer = (page) => ({
    type: RIGHT_ANSWER,
    page
})

export const WRONG_ANSWER = 'WRONG_ANSWER';
export const wrongAnswer = () => ({
    type: WRONG_ANSWER
})

export const ERROR = 'ERROR';
export const error = () => ({
    type: ERROR
})