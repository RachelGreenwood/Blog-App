import { useRef } from 'react';
import './form.css';

function Form(props) {

    const blogTitle= useRef();
    const blogPhoto= useRef();
    const blogBody = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blogPost = {title: blogTitle.current?.value, photo: blogPhoto.current?.value, body: blogBody.current?.value}
        console.log("Inside the form, ", blogPost);
        handlePostRequest(blogPost);
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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add a new post</h2>
                <label>Title: </label>
                <input type='text' ref={blogTitle} required></input>
                <label>Photo URL: </label>
                <input type='text' ref={blogPhoto}></input>
                <label>Article: </label>
                <input id='article' type='text' ref={blogBody} required></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;