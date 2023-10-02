// import { useState, useEffect } from 'react';

function ShowPost(props) {
    const { post } = props;

    return (
        <div>
            <p>{post.body}</p>
        </div>
    )
}

export default ShowPost;