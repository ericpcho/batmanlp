import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import './home.css'

export class Home extends React.Component {

    startQuiz(event) {
        this.props.dispatch(actions.startQuiz())
    }

    // answerQuestion(event) {
    //     this.props.dispatch(actions.answerQuestion())
    // }

    render() {

        let pageView;

        if (this.props.view === 'question1') {
            pageView = <div>
                    <h1>Who is Batman's main sidekick?</h1>
                    <input type="radio" name="choice" value="Scripting" /> Cat Woman 
                    <input type="radio" name="choice" value="Programming"/> Robin 
                    <input type="radio" name="choice" value="Application"/> The Joker
                    <input type="radio" name="choice" value="None of These"/>Penguin
                    <button onclick={event => this.answerQuestion(event)}>Submit</button> 
            </div>
        }

        if (this.props.view === 'home') {
            pageView = <div>
                <p>Hey there Gumshoe. In order to access a mysterious document on Batman's computer, you must first answer a few questions to prove your identity. </p>
                <button className="start-quiz" onClick={event => this.startQuiz(event)}>Begin</button>
            </div>
        }

        return (<div>
            {pageView}
        </div>
        )

    }
}

const mapStateToProps = state => ({
    view: state.view
})

export default connect(mapStateToProps)(Home);