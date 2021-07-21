import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import Profile from "./Profile";
import Login from "./Login";

const Navbar = ({ currentUser, setCurrentUser }) => {
    const renderLoginOrLogout = (currentUser) => {
        if (!(currentUser.token && currentUser.userId)) {
            return "Login";
        }
        return "Logout";
    }

    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/login">{renderLoginOrLogout(currentUser)}</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/posts">
                        <Posts />
                    </Route>
                    <Route path="/profile">
                        <Profile currentUser={currentUser} />
                    </Route>
                    <Route path="/login">
                        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
                    </Route>                        
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Navbar;
