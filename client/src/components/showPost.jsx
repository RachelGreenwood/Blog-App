// import { useState, useEffect } from 'react';

function ShowPost(props) {
    const { post } = props;

    return (
        <div>
            <img src={post.photo}></img>
            <p>{post.body}</p>
        </div>
    )
}

export default ShowPost;