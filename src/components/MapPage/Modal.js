import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { isTemplateElement } from '@babel/types';
import compass from '../MapPage/compass.svg'
import Button from '@material-ui/core/Button'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class Modal extends Component {
    render() {
        const item = this.props.store.modalReducer
        return (
            <div>
                <div className="modal">

                <Button size="small" className="btn-exit-modal" onClick={this.props.modalToggle}>X</Button>

                <div className="modal-content">
                    <h3 className="modal-title">{this.props.store.modalReducer.name}</h3>
                    {this.props.store.modalReducer.address}
                    {this.props.store.modalReducer.phone}
                    
                    <p>{this.props.store.modalReducer.description}</p>
                    <br></br>
                    
                    <a href={`https://www.google.com/maps/search/?api=1&query=` + item.name +
                        `,` + item.address}>Google Maps</a>

                </div>

                </div>
                
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Modal);
