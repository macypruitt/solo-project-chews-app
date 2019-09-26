import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import moment from 'moment';

class AdminListItem extends Component {

    clickEdit = (event) => {
        this.props.history.push(`/edit/${this.props.listing.id}`);
    }

    

    render() {
        const date = moment(this.props.listing.submitted).format("MMM Do YY"); 

        return (
                <tr>
                    <td>{this.props.listing.name}</td>
                    <td>{date}</td>
                    <td><button onClick={this.clickEdit}>Edit</button></td>
                </tr>
                
        );
    }
}

export default withRouter(AdminListItem);
