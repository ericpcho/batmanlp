import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import './home.css'

export class Home extends React.Component {

    startQuiz(){
        this.props.dispatch(actions.answerQuestion('question1'))
    }

    question2() {
        this.props.dispatch(actions.answerQuestion("question2"))
    }

    answer1Right(event) {
        this.props.dispatch(actions.answerQuestion("correct1"))
    }

    answerWrong(event){
        const value = event.target.value
        console.log(value)
        this.props.dispatch(actions.answerQuestion(value))
    }

    answerQuestion(event){
        event.preventDefault()
        this.props.dispatch(actions.answerQuestion('question1'))
    }

    answerQuestionSample(event){
        event.preventDefault()
        const value = event.target.choice.value
        console.log(value)
        this.props.dispatch(actions.answerQuestion(value))
    }


    render() {

        let pageView;

        if (this.props.view === 'question1') {
            pageView = <section className="container"> <div className="terminal1-container">
            <div className = "terminal1">
            </div>
                    <input onClick={event => this.answerWrong(event)} className= "button-choice" type="button" name="choice" value="A" />
                    <input onClick={event => this.answer1Right(event)} className= "button-choice" type="button" name="choice" value="B" />
                    <input onClick={event => this.answerWrong(event)} className= "button-choice" type="button" name="choice" value="C" />
                    <input onClick={event => this.answerWrong(event)} className= "button-choice" type="button" name="choice" value="D" />
            </div>
            </section>
        }

        if (this.props.view === 'correct1') {
            
            pageView = <section className="container"> <div className="terminal1-container">
            <div className = "correct1">
            </div>
            <form onSubmit={event => this.answerQuestion(event)}>
                    <input onClick={event => this.question2(event)} className= "button-next" type="button" name="choice" value="Next" />
                    </form>
            </div>
            </section>
        }

        if (this.props.view === 'A') {
            pageView = <section className="container"> <div className="terminal1-container">
            <div className = "wrongA">
            </div>
            <form onSubmit={event => this.answerQuestion(event)}>
                    <input onClick={event => this.answerQuestion(event)} className= "button-startover" type="button" name="choice" value="Start Over" />
                    </form>
            </div>
            </section>
        }
        if (this.props.view === 'B') {
            pageView = <section className="container"> <div className="terminal1-container">
            <div className = "wrongB">
            </div>
            <form onSubmit={event => this.answerQuestion(event)}>
                    <input onClick={event => this.answerQuestion(event)} className= "button-startover" type="button" name="choice" value="Start Over" />
                    </form>
            </div>
            </section>
        }
        if (this.props.view === 'C') {
            pageView = <section className="container"> <div className="terminal1-container">
            <div className = "wrongC">
            </div>
            <form onSubmit={event => this.answerQuestion(event)}>
                    <input onClick={event => this.answerQuestion(event)} className= "button-startover" type="button" name="choice" value="Start Over" />
                    </form>
            </div>
            </section>
        }

        if (this.props.view === 'D') {
            pageView = <section className="container"> <div className="terminal1-container">
            <div className = "wrongD">
            </div>
            <form onSubmit={event => this.answerQuestion(event)}>
                    <input onClick={event => this.answerQuestion(event)} className= "button-startover" type="button" name="choice" value="Start Over" />
                    </form>
            </div>
            </section>
        }

        if (this.props.view === 'question2') {
            pageView = <div>
                    <h1>What is Man-Bat's real name?</h1>
                    <form onSubmit={event => this.answerQuestionSample(event)}> 
                    <input type="radio" name="choice" value="incorrect" defaultChecked/> Dr. Robert Fausto Ramos
                    <input type="radio" name="choice" value="question3" /> Dr. Robert Kirkland Langstrom 
                    <input type="radio" name="choice" value="incorrect" /> Dr. Robert Bartholomew
                    <input type="radio" name="choice" value="incorrect" /> Dr. Robert Jeffress
                    <input type="submit"/>
                    </form>
            </div>
        }

        if (this.props.view === 'question3') {
            pageView = <div>
                    <h1>Who is the first criminal that you arrested?</h1>
                    <form onSubmit={event => this.answerQuestionSample(event)}> 
                    <input type="radio" name="choice" value="question4" defaultChecked/> Slugsy Kyle
                    <input type="radio" name="choice" value="incorrect"/> The Red Hood
                    <input type="radio" name="choice" value="incorrect"/> Penguin
                    <input type="radio" name="choice" value="incorrect"/> Hugo Strange
                    <input type="submit"/>
                    </form>
            </div>
        }

        if (this.props.view === 'question4') {
            pageView = <div>
                    <h1>Who created Doctor Double-X?</h1>
                    <form onSubmit={event => this.answerQuestionSample(event)}> 
                    <input type="radio" name="choice" value="incorrect" defaultChecked/> Hugo Strange
                    <input type="radio" name="choice" value="question5"/> Simon Ecks
                    <input type="radio" name="choice" value="incorrect"/> Victor Zsasz
                    <input type="radio" name="choice" value="incorrect"/> Count Vergo
                    <input type="submit"/>
                    </form>
            </div>
        }

        if (this.props.view === 'question5') {
            pageView = <div>
                    <h1>The Cluemaster had one child, what is their name?</h1>
                    <form onSubmit={event => this.answerQuestionSample(event)}> 
                    <input type="radio" name="choice" value="incorrect" defaultChecked/> Alpha
                    <input type="radio" name="choice" value="incorrect"/> Dr. Moon 
                    <input type="radio" name="choice" value="incorrect"/> Silken Spider
                    <input type="radio" name="choice" value="winner"/> The Spoiler
                    <input type="submit"/>
                    </form>
            </div>
        }

        if (this.props.view === 'winner') {
            pageView = <div>
                    <h1>Access Granted! You've gained access to some of your top-secret documents. Enter your e-mail to receive all Batman communications:</h1>
                    <form action="https://submit-form.com/644aded2-3c69-42f9-b5e0-e17504165f9e" method="POST"> 
                    <input type="email" name= "email" defaultValue="" placeholder="Enter your email..."/>
                    <input type="hidden" name="_redirect" value="https://localhost:3000/thanks"/>
                    <button type="submit">Submit</button>
                    </form>
            </div>
        }

        if (this.props.view === 'home') {
            pageView = <div>
                <p>Hey there Gumshoe. In order to access a mysterious document on Batman's computer, you must first answer a few questions to prove your identity. </p>
                <button className="start-quiz" onClick={event => this.startQuiz(event)}>Begin</button>
            </div>
        }
        
        if (this.props.view === 'incorrect') {
            pageView = <div>
                    <h1>Access Denied! Only answering every question correctly will gain you access to the top-secret documents.</h1>
                    <button className="start-quiz" onClick={event => this.startQuiz(event)}>Start Again</button>
            </div>
        }

        return (<section>
            {pageView}
        </section>
        )

    }
}

const mapStateToProps = state => ({
    view: state.view
})

export default connect(mapStateToProps)(Home);