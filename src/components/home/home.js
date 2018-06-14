import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import './home.css';
import anatomy from './anatomy-logo.jpg';

export class Home extends React.Component {

    changeView(view){
        this.props.dispatch(actions.changeView(view))
    }

    toggleAnswerA(event){
        const value = event.currentTarget.value
        console.log(value)
        this.props.dispatch(actions.toggleAnswerA(value))
    }

    toggleAnswerB(event){
        const value = event.currentTarget.value
        console.log(value)
        this.props.dispatch(actions.toggleAnswerB(value))
    }

    toggleAnswerC(event){
        const value = event.currentTarget.value
        console.log(value)
        this.props.dispatch(actions.toggleAnswerC(value))
    }

    toggleAnswerD(event){
        const value = event.currentTarget.value
        console.log(value)
        this.props.dispatch(actions.toggleAnswerD(value))
    }
    
    submitAnswer(event){
        if(this.props.selectedAnswer === ""){
            this.props.dispatch(actions.error())
        }
        else if(this.props.selectedAnswer === "c) The Sun" || this.props.selectedAnswer === "b) Dr. Robert Kirkland Langstrom" || this.props.selectedAnswer === "a) Slugsy Kyle" || this.props.selectedAnswer === "b) Simon Ecks" || this.props.selectedAnswer === "d) The Spoiler"){
            let pageValue = this.props.page
            const newPageValue = pageValue+1
            this.props.dispatch(actions.rightAnswer(newPageValue))
        }
        else {
            this.props.dispatch(actions.wrongAnswer())
        }

    }

    render() {

        let pageView;

        if (this.props.view === "home"){
            pageView = <section className="container">
            <div className="title-logo"><img className="anatomy" src={anatomy}/></div>
            <span className="home-text"> Test Your Knowledge </span>
            <button onClick={() => this.changeView("question1")} className="start-now" >Start Now?</button>
            <div className="ie-logo"> </div>
            <div className="wb-logo"> </div>
            </section>
        }

        if (this.props.view === 'question1') {
            pageView = <section className="container"> <div className="terminal1-container">
             <div className="title-logo"><img className="anatomy" src={anatomy}/></div>
            <div className = "terminal1">
            </div>
                    <h1>Question1: Which of the following is a source of Superman's power?</h1>
                    <input onClick={event => this.toggleAnswerA(event)} className= {`button-choice ${this.props.selecteda}`} type="button" name="choice" value="a) Kryptonite"/>
                    <input onClick={event => this.toggleAnswerB(event)} className= {`button-choice ${this.props.selectedb}`} type="button" name="choice" value="b) Water" />
                    <input onClick={event => this.toggleAnswerC(event)} className= {`button-choice ${this.props.selectedc}`} type="button" name="choice" value="c) The Sun" />
                    <input onClick={event => this.toggleAnswerD(event)} className= {`button-choice ${this.props.selectedd}`} type="button" name="choice" value="d) Apples" />
                    <input type="submit" className="submit" onClick={event => this.submitAnswer(event)}/>
                    <span className="error">{this.props.error}</span>
            </div>
            </section>
        }

        if (this.props.view === 'question2') {
            pageView = <section className="container"> <div className="terminal1-container">
            <div className="title-logo"><img className="anatomy" src={anatomy}/></div>
            <div className = "terminal1">
            </div>
            <h1>Question2: What is Man-Bat's real name?</h1> 
                    <input onClick={event => this.toggleAnswerA(event)} className= {`button-choice ${this.props.selecteda}`} type="button" name="choice" value="a) Dr. Robert Fausto Ramos"/>
                    <input onClick={event => this.toggleAnswerB(event)} className= {`button-choice ${this.props.selectedb}`} type="button" name="choice" value="b) Dr. Robert Kirkland Langstrom" />
                    <input onClick={event => this.toggleAnswerC(event)} className= {`button-choice ${this.props.selectedc}`} type="button" name="choice" value="c) Dr. Robert Bartholomew" />
                    <input onClick={event => this.toggleAnswerD(event)} className= {`button-choice ${this.props.selectedd}`} type="button" name="choice" value="d) Dr. Robert Jeffress" />
                    <input type="submit" className="submit" onClick={event => this.submitAnswer(event)}/>
                    <span className="error">{this.props.error}</span>
            </div>
            </section>
        }

        if (this.props.view === 'question3') {
            pageView = <section className="container"> <div className="terminal1-container">
           <div className="title-logo"><img className="anatomy" src={anatomy}/></div>
            <div className = "terminal1">
            </div>
            <h1>Question3: Who is the first criminal that you arrested??</h1> 
                    <input onClick={event => this.toggleAnswerA(event)} className= {`button-choice ${this.props.selecteda}`} type="button" name="choice" value="a) Slugsy Kyle"/>
                    <input onClick={event => this.toggleAnswerB(event)} className= {`button-choice ${this.props.selectedb}`} type="button" name="choice" value="b) The Red Hood" />
                    <input onClick={event => this.toggleAnswerC(event)} className= {`button-choice ${this.props.selectedc}`} type="button" name="choice" value="c) Penguin" />
                    <input onClick={event => this.toggleAnswerD(event)} className= {`button-choice ${this.props.selectedd}`} type="button" name="choice" value="d) Hugo Strange" />
                    <input type="submit" className="submit" onClick={event => this.submitAnswer(event)}/>
                    <span className="error">{this.props.error}</span>
            </div>
            </section>
        }

        if (this.props.view === 'question4') {
            pageView = <section className="container"> <div className="terminal1-container">
            <div className="title-logo"><img className="anatomy" src={anatomy}/></div>
            <div className = "terminal1">
            </div>
            <h1>Question4: Who created Doctor Double-X?</h1> 
                    <input onClick={event => this.toggleAnswerA(event)} className= {`button-choice ${this.props.selecteda}`} type="button" name="choice" value="a) Hugo Strange"/>
                    <input onClick={event => this.toggleAnswerB(event)} className= {`button-choice ${this.props.selectedb}`} type="button" name="choice" value="b) Simon Ecks" />
                    <input onClick={event => this.toggleAnswerC(event)} className= {`button-choice ${this.props.selectedc}`} type="button" name="choice" value="c) Victor Zsasz" />
                    <input onClick={event => this.toggleAnswerD(event)} className= {`button-choice ${this.props.selectedd}`} type="button" name="choice" value="d) Count Vergo" />
                    <input type="submit" className="submit" onClick={event => this.submitAnswer(event)}/>
                    <span className="error">{this.props.error}</span>
            </div>
            </section>
        }

        if (this.props.view === 'question5') {
            pageView = <section className="container"> <div className="terminal1-container">
           <div className="title-logo"><img className="anatomy" src={anatomy}/></div>
            <div className = "terminal1">
            </div>
            <h1>Question5: The Cluemaster had one child, what is their name?</h1> 
                    <input onClick={event => this.toggleAnswerA(event)} className= {`button-choice ${this.props.selecteda}`} type="button" name="choice" value="a) Alpha"/>
                    <input onClick={event => this.toggleAnswerB(event)} className= {`button-choice ${this.props.selectedb}`} type="button" name="choice" value="b) Dr. Moon" />
                    <input onClick={event => this.toggleAnswerC(event)} className= {`button-choice ${this.props.selectedc}`} type="button" name="choice" value="c) Silken Spider" />
                    <input onClick={event => this.toggleAnswerD(event)} className= {`button-choice ${this.props.selectedd}`} type="button" name="choice" value="d) The Spoiler" />
                    <input type="submit" className="submit" onClick={event => this.submitAnswer(event)}/>
                    <span className="error">{this.props.error}</span>
            </div>
            </section>
        }

        if (this.props.view === 'question6') {
            pageView = <section className="container">
                    <div className="title-logo"><img className="anatomy" src={anatomy}/></div>
                    <h2>Congratulations! You are one of the very few to access this page.</h2>
                    <h2>As a reward, here are exclusive srpeads from DC Comics: Anatomy of a Metahuman</h2>
                    <h2>Available September 2018</h2>
                    <div className="spread1"> </div>
                    <div className="spread2"> </div>
                    <h3>Want to learn more?</h3>
                    <h4>Sign up now to get the latest news</h4>
                    <form className="email-form" action="https://submit-form.com/644aded2-3c69-42f9-b5e0-e17504165f9e" method="POST">
                    <div className="email-div"> 
                    <label className="email-text">Email Address:</label>
                    <input className="email" type="email" name= "email" defaultValue="" placeholder="Enter your email..."/>
                    </div>
                    <input type="hidden" name="_redirect" value="https://batman.netlify.com/thanks"/>
                    <button className="form-submit" type="submit">Submit</button>
                    </form>
            </section>
        }
        

        if (this.props.view === "incorrect"){
            pageView = <section className="container">
            <div className="title-logo"><img className="anatomy" src={anatomy}/></div>
            <span className="home-text">Incorrect!</span>
            <button onClick={() => this.changeView(`question${this.props.page}`)} className="incorrect" >Go Back</button>
            </section>
        }

        if (this.props.view === "correct"){
            pageView = <section className="container">
            <div className="title-logo"><img className="anatomy" src={anatomy}/></div>
            <span className="home-text">Correct!</span>
            <button onClick={() => this.changeView(`question${this.props.page}`)} className="correct" >Next Question</button>
            </section>
        }


        

        return (<section className="background">
            {pageView}
        </section>
        )

    }
}

const mapStateToProps = state => ({
    view: state.view,
    selectedAnswer: state.selectedAnswer,
    page: state.page,
    error: state.error,
    selecteda: state.selecteda,
    selectedb: state.selectedb,
    selectedc: state.selectedc,
    selectedd: state.selectedd
})

export default connect(mapStateToProps)(Home);