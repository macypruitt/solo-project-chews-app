import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

////styles
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


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
    }

    handleCheckbox(event,dataKey) {
        this.setState({
            ...this.state,
            [dataKey]: event.target.checked
        })
    }

    handleClickSubmit = (event) => {
       this.props.dispatch({type:'SEND_SUBMIT', payload: this.state});
        Swal.fire({
            text: 'Thanks for your suggestion!',
            type: 'success',
            confirmButtonText: 'Back to Map',
            background: '#FFE9AA'
        }).then((result) => {
            this.props.history.push(`/map`);
        })
    }

    render() {
        return (
            <div className="submit-view">
                <div className="map-spacer"></div>
                <h2>Submit a suggestion for Chews</h2>

                <TextField
                    label="Name"
                    className="suggest-input"
                    onChange={(event) => this.handleChangeInputText(event, 'name')}
                />
                <br/>
                <TextField
                    label="Address"
                    className="suggest-input"
                    onChange={(event) => this.handleChangeInputText(event, 'address')}
                />
                <br/>
                <TextField
                    
                    label="Description"
                    multiline
                    rowsMax="8"
                    className="suggest-input"
                    onChange={(event) => this.handleChangeInputText(event, 'description')}
                    
                    margin="normal"
                />
                <br/>
                <FormControlLabel
                    control={
                        <Checkbox value="true" 
                            checked={this.state.keto} 
                            onChange={(event) => this.handleCheckbox(event, 'keto')} value="true"
                            color="secondary" />
                    }
                    label="Keto"
                />
                <FormControlLabel
                    control={
                        <Checkbox value="true" 
                            checked={this.state.vegan} 
                            onChange={(event) => this.handleCheckbox(event, 'vegan')} value="true"
                            color="secondary" />
                    }
                    label="Vegan"
                />
                <FormControlLabel
                    control={
                        <Checkbox value="true" 
                            checked={this.state.gluten_free} 
                            onChange={(event) => this.handleCheckbox(event, 'gluten_free')} value="true"
                            color="secondary" />
                    }
                    label="Gluten-free"
                />
                <br/>
                <Button onClick={this.handleClickSubmit} type="submit">Submit</Button>

            </div>
        );
    }
}

export default connect(mapStoreToProps)(SubmitPage);
