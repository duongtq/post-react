import React, { Fragment } from 'react';
import Login from './Login';

const Profile = ({ currentUser, setCurrentUser, action, setAction }) => {

    const renderProfile = (currentUser) => {
        if (!(currentUser.token && currentUser.userId)) {
            return (
                <Fragment>
                    <h2>You must log in first to view profile</h2>
                    <Login currentUser={currentUser} setCurrentUser={setCurrentUser} action={action} setAction={setAction} />
                </Fragment>
            );
        }
        
        return (
            <div>
                <h2>Profile</h2>
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
