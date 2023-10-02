import { useEffect, useState } from 'react';
function Posts() {
    const [posts, setPosts] = useState([]);

    const getRequest = () => {
        fetch("http://localhost:8080/posts")
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts);
                console.log('Posts fetched...', posts);
            });
    }
  
    useEffect(() => {
        getRequest();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    )
}

export default Posts;