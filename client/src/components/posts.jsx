import { useEffect, useState } from 'react';
import ShowPost from './showPost';
import Form from './form';
import './posts.css';
import { Link } from 'react-router-dom';

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
                        <Link to={`/article/${post.id}`}>
                            <button className='buttons' onClick={() => showArticle(post)}>{post.title}</button>
                        </Link>
                    </div>
                ))}
                {selectedPost && <ShowPost post={selectedPost} data-testid='selected-post' />}
            </div>
            <Form submit={handlePostRequest} />
        </div>
    )
}

export default Posts;