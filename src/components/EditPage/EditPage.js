import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class EditPage extends Component {

    ////We store edit-in-progress in state
    state = {
        name:'',
        address: '',
        phone: '',
        description: '',
        website: '',
        lat:'',
        lng: '',
        keto:'',
        gluten_free:'',
        vegan: '',
        blk: '',
        approved: ''
    };

    componentDidMount(){
        ////GET the single listing to edit
        this.props.dispatch({type: 'GET_EDIT', payload:this.props.match.params.id});
    }

    ////change handlers for form fields
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
        ////On click, we consolidate past and new listing, then PUT in database, then go back to list
        const dispatchObject = this.consolidateEdit();
        this.props.dispatch({type:'PUT_EDIT', payload: dispatchObject});
        this.props.history.push('/admin')
     }

    consolidateEdit(){
        ////Starting with the original listing, we add any modifications from state
        let submitThisObject = this.props.store.editReducer[0];
        
        if(this.state.name !==''){
            submitThisObject.name = this.state.name;
        }
        if(this.state.address !==''){
            submitThisObject.address = this.state.address;
        }
        if(this.state.phone !==''){
            submitThisObject.phone = this.state.phone;
        }
        if(this.state.description !==''){
            submitThisObject.description = this.state.description;
        }
        if(this.state.website !==''){
            submitThisObject.website = this.state.website;
        }
        if(this.state.lat !==''){
            submitThisObject.lat = this.state.lat;
        }
        if(this.state.lng !==''){
            submitThisObject.lng = this.state.lng;
        }
        if(this.state.keto !==''){
            submitThisObject.keto = this.state.keto;
        }
        if(this.state.gluten_free !==''){
            submitThisObject.gluten_free = this.state.gluten_free;
        }
        if(this.state.gluten_free !==''){
            submitThisObject.blk = this.state.blk;
        }
        if(this.state.approved !==''){
            submitThisObject.approved = this.state.approved;
        };

        return submitThisObject;
    }

    deleteListing = (event) => {
        this.props.dispatch({type:'DELETE_LISTING', payload: this.props.match.params.id});
        this.props.history.push('/admin');
    }

    render() {
        ////listingFromDatabase object prevents error if GET request hasn't returned yet
        let listingFromDatabase = {
            name:'',
            address: '',
            phone: '',
            description: '',
            website: '',
            lat:'',
            lng: '',
            keto:'',
            gluten_free:'',
            vegan: '',
        }

        if(this.props.store.editReducer[0] != null){
            listingFromDatabase = this.props.store.editReducer[0];
        };

        return (
            <div className="editpage-div">
                <div className="editpage-spacer"></div>
                
                <div className="edit-box">
                    
                    <p>Name: {listingFromDatabase.name}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'name')}
                        placeholder="New name"
                        id="js-name-input">
                    </input>
                </div>
                

                <div className="edit-box">
                    <p>Address: {listingFromDatabase.address}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'address')}
                        placeholder="New address">
                    </input>
                </div>
                
                <div className="edit-box">
                    <p>Phone: {listingFromDatabase.phone}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'phone')}
                        placeholder="New address">
                    </input>
                </div>
                
                <div className="edit-box">
                    <p>Description: {listingFromDatabase.description}</p>
                    <textarea
                        onChange={(event) => this.handleChangeInputText(event, 'description')}
                        placeholder="New description">
                    </textarea>
                </div>
                
                <div className="edit-box">
                    <p>Website:  {listingFromDatabase.website}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'website')}
                        placeholder="New website">
                    </input>
                </div>

                <div className="edit-box">
                    <p>Lattitude: {listingFromDatabase.lat}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'lat')}
                        placeholder="New lattitude">
                    </input>
                </div>
                
                <div className="edit-box">
                    <p>Longitude: {listingFromDatabase.lng}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'lng')}
                        placeholder="New longitude">
                    </input>
                </div>
                <br></br>

                <input type="checkbox" name="keto" value="true" id="keto"
                    onChange={(event) => this.handleCheckbox(event, 'keto')}/>
                <label for="keto">Keto</label>

                <input type="checkbox" name="gluten_free" value="true" id="gluten_free"
                    onChange={(event) => this.handleCheckbox(event, 'gluten_free')}/>
                <label for="gluten_free">Gluten-free</label>

                <input type="checkbox" name="vegan" value="true" id="vegan"
                    onChange={(event) => this.handleCheckbox(event, 'vegan')} />
                <label for="vegan">Vegan</label>

                <input type="checkbox" name="blk" value="true" id="vegan"
                    onChange={(event) => this.handleCheckbox(event, 'blk')} />
                <label for="blk">BLK</label>

                <br/>

                <input type="checkbox" name="approved" value="true" id="approved"
                    onChange={(event) => this.handleCheckbox(event, 'approved')} />
                <label for="approved">Approved</label>

                <button onClick={this.handleClickSubmit} type="submit">Save</button>
                <button onClick={this.deleteListing}>Delete</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EditPage);
