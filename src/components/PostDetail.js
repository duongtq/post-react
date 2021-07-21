import React from 'react';

const PostDetail = (props) => {
    return (
        <div>
            <span><em>ID</em>: {props.id}</span>
            <p><em>Title</em>: {props.title}</p>
            <p><em>Body</em>: {props.body}</p>
        </div>        
    );
}

export default PostDetail;
