import { useEffect, useState } from 'react';
import ShowPost from './showPost';
import Form from './form';
import './posts.css';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    const getRequest = () => {
        fetch("http://localhost:8080/posts")
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts);
                console.log('Posts fetched...', posts);
            });
    }

    const handlePostRequest = (data) => {
        console.log("Inside the POST, ", data);
        fetch("http://localhost:8080/posts", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("In the final stretch, ", data);
            setPosts([...posts, data]);
        })
    }

    const showArticle = (post) => {
        setSelectedPost(post);
       console.log("here, ", selectedPost);
     }
  
    useEffect(() => {
        getRequest();
    }, []);

    return (
        <div>
            <div data-testid='post-list'>
                {posts.map((post) => (
                    <div className='titles' key={post.id}>
                        <button className='buttons' onClick={() => showArticle(post)}>{post.title}</button>
                    </div>
                ))}
                {selectedPost && <ShowPost post={selectedPost} data-testid='selected-post' />}
            </div>
            <Form submit={handlePostRequest} />
        </div>
    )
}

export default Posts;