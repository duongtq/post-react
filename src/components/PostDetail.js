import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = ({ posts }) => {
    const id = parseInt(useParams().id);
    const post = posts.find(ele => ele.id === id);

    return (
        <div>
            <span><em>ID</em>: {post.id}</span>
            <p><em>Title</em>: {post.title}</p>
            <p><em>Body</em>: {post.body}</p>
        </div>        
    );
}

export default PostDetail;
