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

    handleChangeInputText(event, dataKey) {
        const fieldValue = event.target.value;
        this.setState({
            ...this.state,
            [dataKey]: fieldValue,
        })
        console.log(this.state);
    }

    handleCheckbox(event,dataKey) {
        this.setState({
            ...this.state,
            [dataKey]: event.target.checked
        }, () => {
            console.log(this.state)
        })
        
    }


    render() {
        return (
            <div>
                <h2>Submit a suggestion for Chews</h2>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(event) => this.handleChangeInputText(event, 'name')}>
                </input>
                <input
                    type="text"
                    placeholder="Address"
                    onChange={(event) => this.handleChangeInputText(event, 'address')}>
                </input>
                <input
                    type="text"
                    placeholder="Description"
                    onChange={(event) => this.handleChangeInputText(event, 'description')}>
                </input>

                <input type="checkbox" name="keto" value="true"
                onChange={(event) => this.handleCheckbox(event, 'keto')} />
                
                
            </div>
        );
    }
}

export default connect(mapStoreToProps)(TemplateClass);
