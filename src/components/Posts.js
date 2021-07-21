import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PostDetail from './PostDetail';


const Posts = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios("https://jsonplaceholder.typicode.com/posts");
            setData(response.data);
        }
        fetchData();
    });

    return (
        <div>
            <h2>Posts</h2>

            <input id="title" type="text" placeholder="Search by title..." onChange={(e) => setSearchTerm(e.target.value)} />
            <br />
            <table className="table table-bordered mt-2">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {data
                        .filter(ele => ele.title.includes(searchTerm))
                        .map(ele =>
                            <tr key={ele.id}>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                                <td>
                                    <BrowserRouter>
                                        <Link to={"/posts/" + ele.id} >
                                            View Detail
                                        </Link>
                                        <Switch>
                                            <Route path={"/posts/" + ele.id}>
                                                <PostDetail id={ele.id} title={ele.title} body={ele.body} />
                                            </Route>
                                        </Switch>
                                    </BrowserRouter>
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
}

export default Posts;
