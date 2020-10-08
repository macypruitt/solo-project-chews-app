import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ReCAPTCHA from "react-google-recaptcha";

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
        blk: false,
        submitted: '',
        captcha: ''
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
        // SweetAlert modal upon submission
        Swal.fire({
                text: 'Thanks for your suggestion!',
                type: 'success',
                confirmButtonText: 'Back to Map',
                background: '#FFE9AA'
        }).then((result) => {
            this.props.history.push(`/map`);
        }) 
    }
    
    handleCaptcha(value) {
        this.setState({
            ...this.state, captcha: true
        })
    }

    render() {
        return (
            <div className="submit-view">
                <div className="map-spacer"></div>
                <h2>Submit a suggestion for Chews</h2>
                <div style={{margin:'auto', textAlign:'center', display:'inline-block'}}>
                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
                        onChange={()=> this.handleCaptcha()}
                    />
                </div>
                <br/>

                <FormControl className="form-control">
                    <div style={{marginTop:'16px'}}>Please fill out all of the following fields:</div>
                    <div className="form-text-inputs">
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
                    </div>
                    <br/>

                    <div className="checkboxes">
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
                        <FormControlLabel
                            control={
                                <Checkbox value="true" 
                                    checked={this.state.blk} 
                                    onChange={(event) => this.handleCheckbox(event, 'blk')} value="true"
                                    color="secondary" />
                            }
                            label="Black-owned"
                        />
                    </div>
                    <br/> 

                    <Button 
                        variant="outlined"
                        disabled={!this.state.captcha || !this.state.name || !this.state.address}
                        onClick={this.handleClickSubmit} 
                        type="submit">Submit
                    </Button>

                </FormControl>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(SubmitPage);