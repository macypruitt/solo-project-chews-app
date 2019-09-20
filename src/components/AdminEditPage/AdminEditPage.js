import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class AdminEditPage extends Component {
    state = {
        
    };

    componentDidMount(){
        console.log('hiii', this.props.match.params.id);
        this.props.dispatch({type: 'GET_EDIT', payload:this.props.match.params.id});
        if (this.props.store.editReducer[0].name !== undefined){
            this.addObjectToState();
        }
    }

    //{this.props.store.editReducer[0].name}
    handleChangeInputText(event, dataKey) {
        const fieldValue = event.target.value;
        this.setState({
            ...this.state,
            [dataKey]: fieldValue,
        })
        console.log(this.state);
    }

    consolidateEdit(){
        let dataObject={}

        if(this.props.store.editReducer[0].name){
            dataObject.name = this.props.store.editReducer[0].name
        }
        if(this.props.store.editReducer[0].address){
            dataObject.address = this.props.store.editReducer[0].address
        }
        if(this.props.store.editReducer[0].phone){
            dataObject.phone = this.props.store.editReducer[0].phone
        }  
        if(this.props.store.editReducer[0].description){
            dataObject.description = this.props.store.editReducer[0].description
        }  
        if(this.props.store.editReducer[0].website){
            dataObject.website = this.props.store.editReducer[0].website
        }  
        if(this.props.store.editReducer[0].lat){
            dataObject.lat = this.props.store.editReducer[0].lat
        }  
        if(this.props.store.editReducer[0].lng){
            dataObject.lng = this.props.store.editReducer[0].lng
        }  
        if(this.props.store.editReducer[0].keto){
            dataObject.keto = this.props.store.editReducer[0].keto
        }  
        if(this.props.store.editReducer[0].gluten_free){
            dataObject.gluten_free = this.props.store.editReducer[0].gluten_free
        }  
        if(this.props.store.editReducer[0].vegan){
            dataObject.vegan = this.props.store.editReducer[0].vegan
        }  
        if(this.state.name){
            dataObject.name = this.state.name;
        }
        if(this.state.address){
            dataObject.address = this.state.address;
        }
        if(this.state.phone){
            dataObject.phone = this.state.phone;
        }
        if(this.state.description){
            dataObject.description = this.state.description;
        }
        if(this.state.website){
            dataObject.website = this.state.website;
        }
        if(this.state.lat){
            dataObject.lat = this.state.lat;
        }
        if(this.state.lng){
            dataObject.lng = this.state.lng;
        }
        if(this.state.keto){
            dataObject.keto = this.state.keto;
        }
        if(this.state.gluten_free){
            dataObject.gluten_free = this.state.gluten_free;
        }
        return dataObject;
    };

    handleCheckbox(event,dataKey) {
        this.setState({
            ...this.state,
            [dataKey]: event.target.checked
        }, () => {
            console.log(this.state)
        })
    }

    handleClickSubmit = (event) => {
        const dataObject = this.consolidateEdit();
        this.props.dispatch({type:'PUT_EDIT', payload: dataObject});
        console.log(dataObject)
     }

    render() {
        return (
            <div className="content-container">
                <h2>Edit Listing</h2>

                <div className="edit-box">
                    <p>Name: {this.props.store.editReducer[0].name}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'name')}
                        placeholder="New name">
                    </input>
                </div>

                <div className="edit-box">
                    <p>Address: {this.props.store.editReducer[0].address}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'address')}
                        placeholder="New address">
                    </input>
                </div>
                
                <div className="edit-box">
                    <p>Phone: {this.props.store.editReducer[0].phone}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'phone')}
                        placeholder="New address">
                    </input>
                </div>
                
                <div className="edit-box">
                    <p>Description: {this.props.store.editReducer[0].description}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'description')}
                        placeholder="New description">
                    </input>
                </div>
                
                <div className="edit-box">
                    <p>Website:  {this.props.store.editReducer[0].website}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'website')}
                        placeholder="New website">
                    </input>
                </div>

                <div className="edit-box">
                    <p>Lattitude: {this.props.store.editReducer[0].lat}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'lat')}
                        placeholder="New lattitude">
                    </input>
                </div>
                
                <div className="edit-box">
                    <p>Longitude: {this.props.store.editReducer[0].lng}</p>
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
                <br></br>
                <button onClick={this.handleClickSubmit} type="submit">Save</button>
                
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminEditPage);
