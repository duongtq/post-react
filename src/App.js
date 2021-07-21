import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
    const [currentUser, setCurrentUser] = useState({
        token: null,
        userId: null,
    });

    return (
        <div className="container">
            <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </div>
    );
}

export default App;
