import './showPost.css';
import { useParams } from 'react-router-dom';

function ShowPost(props) {
    const { post } = props;
    const { id } = useParams();

    return (
        <div data-testid='show-post'>
            <h2>{post.title}</h2>
            <img src={post.photo}></img>
            <p>{post.body}</p>
        </div>
    )
}

export default ShowPost;