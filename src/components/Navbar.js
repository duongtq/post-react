import React, { useState }from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import Profile from "./Profile";
import Login from "./Login";
import PostDetail from './PostDetail';


const Navbar = ({ currentUser, setCurrentUser }) => {
    
    const [action, setAction] = useState("Login");

    const [data, setData] = useState([]);

    const onClickHandler = () => {
        if (action === "Logout") {
            setAction(action => "Login");
            setCurrentUser({
                token: null,
                userId: null
            });
        }
    }

    const renderLoginLogout = () => {
        if (action === "Login") {
            return <Login currentUser={currentUser} setCurrentUser={setCurrentUser} action={action} setAction={setAction} />
        } else {
            return <h3>Login Successfully</h3>
        }
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
                        <li onClick={onClickHandler}>
                            <Link to="/login">{action}</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/posts">
                        <Posts data={data} setData={setData}/>
                    </Route>
                    <Route path="/profile">
                        <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} action={action} setAction={setAction} />
                    </Route>
                    <Route path="/login">
                        {renderLoginLogout()}
                    </Route>
                    <Route path="/detail/:id">
                        <PostDetail posts={data} /> 
                    </Route>                      
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Navbar;
