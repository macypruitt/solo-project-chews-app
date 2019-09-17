import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { noConflict } from 'q';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class TemplateClass extends Component {
    state = {
        name: '',
        address: '',
        phone: '',
        description: '',
        website:'',
        keto: false,
        gluten_free: false,
        vegan: false,
        submitted: '',
        approved: false
    };

    render() {
        return (
            <div>
                <h2>Submit a suggestion for Chews</h2>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(TemplateClass);
