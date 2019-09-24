import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { isTemplateElement } from '@babel/types';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class TemplateClass extends Component {
    state = {
        heading: 'Class Component',
    };

    

    render() {
        return (
            <div>
                <div className="modal">

                <button className="btn-exit-modal" onClick={this.props.modalToggle}>X</button>

                <div className="modal-content">
                    {this.props.store.modalReducer.name}


                </div>

                </div>
                
            </div>
        );
    }
}

export default connect(mapStoreToProps)(TemplateClass);
