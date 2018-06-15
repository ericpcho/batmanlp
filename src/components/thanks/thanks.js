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
            <div className="ie-logo"> </div>
                <div className="wb-logo"> </div>
            </section>
        )
    }
}

export default connect()(Thanks);