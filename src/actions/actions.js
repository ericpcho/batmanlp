export const START_QUIZ = 'START_QUIZ';
export const startQuiz = () => ({
    type: START_QUIZ,
})

export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const answerQuestion = (answer) => ({
    type: ANSWER_QUESTION,
    answer
})

// export const CHANGE_VIEW = 'CHANGE_VIEW';
// export const changeView = (view) => ({
//     type: CHANGE_VIEW,
//     view
// })