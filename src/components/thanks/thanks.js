import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import './thanks.css'
import anatomy from './anatomy-logo.jpg';

export class Thanks extends React.Component {
    render(){
        return(
<section className="container">
                    <div className="title-logo"><img className="anatomy" src={anatomy}/></div>
                    <h2>Congratulations! You are one of the very few to access this page.</h2>
                    <h2>As a reward, here are exclusive srpeads from DC Comics: Anatomy of a Metahuman</h2>
                    <h2>Available September 2018</h2>
                    <div className="spread1"> </div>
                    <div className="spread2"> </div>
                    <a href="http://insighteditions.com" className="ie-logo"> </a>
            <a href="https://www.dccomics.com" className="wb-logo"><span className="legal" >All related characters and elements © & ™ DC Comics. (s18)</span></a>
            </section>
        )
    }
}

export default connect()(Thanks);