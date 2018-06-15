import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import './thanks.css'

export class Thanks extends React.Component {
    render(){
        return(
            <section>
            <div className="thanks">
                Thank You!
            </div>
            <a href="http://insighteditions.com" className="ie-logo"> </a>
            <a href="https://www.dccomics.com" className="wb-logo"><span className="legal" >All related characters and elements © & ™ DC Comics. (s18)</span></a>
            </section>
        )
    }
}

export default connect()(Thanks);