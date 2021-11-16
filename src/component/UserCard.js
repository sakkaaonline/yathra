import React, { Component } from 'react';

class UserCard extends Component {
    render () {
        const { data } = this.props;
        return (
            <div className="space">
                <table className="usercard">
                    <tr>
                        <td>Name</td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{data.email}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{data.phone}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default UserCard;