import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class AdminEditPage extends Component {
    state = {
        name: 'Shanice'
    };

    componentDidMount(){
        console.log('hiii', this.props.match.params.id);
        this.props.dispatch({type: 'GET_EDIT', payload:this.props.match.params.id})
        
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

    render() {
        console.log(this.state);
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
                        onChange={(event) => this.handleChangeInputText(event, 'address')}>
                    </input>
                </div>
                
                <div className="edit-box">
                    <p>Phone: {this.props.store.editReducer[0].phone}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'phone')}>
                    </input>
                </div>
                
                <div className="edit-box">
                    <p>Description: {this.props.store.editReducer[0].description}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'description')}>
                    </input>
                </div>
                
                <div className="edit-box">
                    <p>Website:  {this.props.store.editReducer[0].website}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'website')}>
                    </input>
                </div>

                <div className="edit-box">
                    <p>Lattitude: {this.props.store.editReducer[0].lat}</p>
                    
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'lat')}>
                    </input>
                </div>
                
                <div className="edit-box">
                    <p>Longitude: {this.props.store.editReducer[0].lng}</p>
                    <input type="text"
                        onChange={(event) => this.handleChangeInputText(event, 'lng')}>
                    </input>
                </div>
                <br></br>
                <button>Save</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminEditPage);
