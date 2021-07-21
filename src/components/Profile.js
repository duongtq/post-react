import React, { Fragment } from 'react';

const Profile = ({ currentUser }) => {

    const renderProfile = (currentUser) => {
        if (!(currentUser.token && currentUser.userId)) {
            return (
                <h2>You must log in first to view profile</h2>
            );
        }
        return (
            <div>
                <p>Name: Tran Duong</p>
                <p>User ID: {currentUser.userId}</p>
            </div>
        );

    }

    return (
        <Fragment>
            {renderProfile(currentUser)}
        </Fragment>
    );
}

export default Profile;
