import './showPost.css';

function ShowPost(props) {
    const { post } = props;

    return (
        <div data-testid='show-post'>
            <img src={post.photo}></img>
            <p>{post.body}</p>
        </div>
    )
}

export default ShowPost;