import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Posts = ({ data, setData }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortTitle, setSortTitle] = useState(`Title -- NONE`);
    const original = data;

    useEffect(() => {
        async function fetchData() {
            const response = await axios("https://jsonplaceholder.typicode.com/posts");
            setData(response.data);
        }
        fetchData();
    });

    const handleSort = () => {
        if (sortTitle === 'Title -- NONE') {
            setSortTitle(sortTitle => 'Title -- ASC');
        }
        if (sortTitle === 'Title -- ASC') {
            setSortTitle(sortTitle => 'Title -- DESC');
        }
        if (sortTitle === 'Title -- DESC') {
            setSortTitle(sortTitle => 'Title -- NONE');
        }
    }

    const getSortedData = (sortTitle) => {
        if (sortTitle === 'Title -- NONE') {
            return original;
        }
        if (sortTitle === 'Title -- ASC') {
            return data.sort((post1, post2) => {
                if (post1.title < post2.title) return -1;
                if (post1.title > post2.title) return 1;
                return 0;
            });
        }
        if (sortTitle === 'Title -- DESC') {
            return data.sort((post1, post2) => {
                if (post1.title > post2.title) return -1;
                if (post1.title < post2.title) return 1;
                return 0;
            });
        }
    }

    const sorted = getSortedData(sortTitle);

    return (
        <div>
            <input id="title" type="text" placeholder="Search by title..." onChange={(e) => setSearchTerm(e.target.value)} />
            <br />
            <table className="table table-bordered mt-2">
                <thead>
                    <tr>
                        <th style={{width: '5%'}}>ID</th>
                        <th onClick={handleSort}>{sortTitle}</th>
                        <th style={{width: '15%'}}>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {sorted
                        .filter(ele => ele.title.includes(searchTerm))
                        .map(ele =>
                            <tr key={ele.id}>
                                <td><span>{ele.id}</span></td>
                                <td><p>{ele.title}</p></td>
                                <td>
                                    <Link to={"/detail/" + ele.id} >View Detail</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Posts;
