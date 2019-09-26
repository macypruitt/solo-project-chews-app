import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class SubmitPage extends Component {
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

    handleClickSubmit = (event) => {
       this.props.dispatch({type:'SEND_SUBMIT', payload: this.state});
        Swal.fire({
            text: 'Thanks for your suggestion!',
            type: 'success',
            confirmButtonText: 'Map'
        }).then((result) => {
            this.props.history.push(`/map`);
        })
    }


    render() {
        return (
            <div className="submit-view">
                <h2>Submit a suggestion for Chews</h2>
                <input
                    type="text"
                    placeholder="Name"
                    className="suggest-input"
                    onChange={(event) => this.handleChangeInputText(event, 'name')}>
                </input>
                <br></br>
                <input
                    type="text"
                    placeholder="Address"
                    className="suggest-input"
                    onChange={(event) => this.handleChangeInputText(event, 'address')}>
                </input>
                <br></br>
                <textarea
                    type="text"
                    placeholder="Description"
                    onChange={(event) => this.handleChangeInputText(event, 'description')}/>
                <br></br>
                
                <div className="checkbox-div">
                <input type="checkbox" name="keto" value="true" id="keto"
                    onChange={(event) => this.handleCheckbox(event, 'keto')}/>
                <label for="keto">Keto</label>

                <input type="checkbox" name="gluten_free" value="true" id="gluten_free"
                    onChange={(event) => this.handleCheckbox(event, 'gluten_free')}/>
                <label for="gluten_free">Gluten-free</label>

                <input type="checkbox" name="vegan" value="true" id="vegan"
                    onChange={(event) => this.handleCheckbox(event, 'vegan')} />
                <label for="vegan">Vegan</label>
                <br></br>
                <Button onClick={this.handleClickSubmit} type="submit">Submit</Button>
                </div>
                
            </div>
        );
    }
}

export default connect(mapStoreToProps)(SubmitPage);
