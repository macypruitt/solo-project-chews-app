import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import moment from 'moment';

////This component holds listing info in a row displayed on the AdminListPage
class AdminListItem extends Component {
    
    clickEdit = (event) => {
        this.props.history.push(`/edit/${this.props.listing.id}`);
    }

    render() {
        ////Shows date listing was submitted
        const date = moment(this.props.listing.submitted).format("MMM Do YY"); 
        
        ////Checks whether status is approved
        let status = 'pending';
        if(this.props.listing.approved == true){
            status =  'approved'
        }
        return (
                <tr>
                    <td>{this.props.listing.name}</td>
                    <td>{status}</td>
                    <td>{date}</td>
                    <td><button onClick={this.clickEdit}>Edit</button></td>
                </tr>
                
        );
    }
}

export default withRouter(AdminListItem);
