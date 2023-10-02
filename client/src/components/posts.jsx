import { useEffect, useState } from 'react';
import ShowPost from './showPost';

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
            {posts.map((post) => (
                <div key={post.id}><button onClick={() => showArticle(post)}>{post.title}</button></div>
            ))}
            {selectedPost && <ShowPost post={selectedPost} />}
        </div>
    )
}

export default Posts;