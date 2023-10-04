import './showPost.css';

function ShowPost(props) {
    const { post } = props;
    const bodyWithLineBreaks = post.body.replace(/\\n/g, '\n');
    const paragraphs = bodyWithLineBreaks.split('\n');

    return (
        <div data-testid='show-post'>
            <h2>{post.title}</h2>
            <img src={post.photo}></img>
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    )
}

export default ShowPost;