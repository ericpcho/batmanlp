import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import './thanks.css'

export class Thanks extends React.Component {
    render(){
        return(
            <div className="thanks">
                Thank You!
            </div>
        )
    }
}

export default connect()(Thanks);