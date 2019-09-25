import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { isTemplateElement } from '@babel/types';
import compass from '../MapPage/compass.svg'
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
                    <h3>{this.props.store.modalReducer.name}</h3>
                    {this.props.store.modalReducer.address}
                    {this.props.store.modalReducer.phone}
                    
                    <p>{this.props.store.modalReducer.description}</p>
                    <br></br>
                    
                    <a href='{this.props.store.modalReducer.website}'>website</a>
                    

                </div>

                </div>
                
            </div>
        );
    }
}

export default connect(mapStoreToProps)(TemplateClass);
