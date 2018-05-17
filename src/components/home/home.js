import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import './home.css'

export class Home extends React.Component {

    startQuiz(event) {
        this.props.dispatch(actions.startQuiz())
    }

    answerQuestion(event) {
        event.preventDefault()
        console.log(event.target.choice.value);
        const value = event.target.choice.value
        this.props.dispatch(actions.answerQuestion(value))
    }

    render() {

        let pageView;

        if (this.props.view === 'question1') {
            pageView = <div>
                    <h1>Which of the following is a source of Superman's power?</h1>
                    <form onSubmit={event => this.answerQuestion(event)}>
                    <input type="radio" name="choice" value="incorrect" defaultChecked/> Kryptonite
                    <input type="radio" name="choice" value="incorrect" /> Water 
                    <input type="radio" name="choice" value="question2" /> The Sun
                    <input type="radio" name="choice" value="incorrect" /> Apples
                    <input type="submit"   />
                    </form>
            </div>
        }

        if (this.props.view === 'question2') {
            pageView = <div>
                    <h1>What is Man-Bat's real name?</h1>
                    <form onSubmit={event => this.answerQuestion(event)}> 
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
                    <form onSubmit={event => this.answerQuestion(event)}> 
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
                    <form onSubmit={event => this.answerQuestion(event)}> 
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
                    <form onSubmit={event => this.answerQuestion(event)}> 
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

        if (this.props.view === 'incorrect') {
            pageView = <div>
                    <h1>Access Denied! Only answering every question correctly will gain you access to the top-secret documents.</h1>
                    <button className="start-quiz" onClick={event => this.startQuiz(event)}>Start Again</button>
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