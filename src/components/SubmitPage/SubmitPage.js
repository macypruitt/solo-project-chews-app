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

    handlerChangeofAll(event, dataKey) {
        const fieldValue = event.target.value;
        this.setState({
            ...this.state,
            [dataKey]: fieldValue,
        })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h2>Submit a suggestion for Chews</h2>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(event) => this.handlerChangeofAll(event, 'name')}>
                </input>
                
            </div>
        );
    }
}

export default connect(mapStoreToProps)(TemplateClass);
