export const CHANGE_VIEW = 'CHANGE_VIEW';
export const changeView = (view) => ({
    type: CHANGE_VIEW,
    view
})

export const TOGGLE_ANSWERA = 'TOGGLE_ANSWERA';
export const toggleAnswerA = (answer) => ({
    type: TOGGLE_ANSWERA,
    answer
})

export const TOGGLE_ANSWERB = 'TOGGLE_ANSWERB';
export const toggleAnswerB = (answer) => ({
    type: TOGGLE_ANSWERB,
    answer
})

export const TOGGLE_ANSWERC = 'TOGGLE_ANSWERC';
export const toggleAnswerC = (answer) => ({
    type: TOGGLE_ANSWERC,
    answer
})

export const TOGGLE_ANSWERD = 'TOGGLE_ANSWERD';
export const toggleAnswerD = (answer) => ({
    type: TOGGLE_ANSWERD,
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