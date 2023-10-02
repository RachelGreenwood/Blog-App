import { useRef } from 'react';

function Form(props) {

    const blogTitle= useRef();
    const blogPhoto= useRef();
    const blogBody = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blogPost = {title: blogTitle.current?.value, photo: blogPhoto.current?.value, body: blogBody.current?.value}
        console.log("Inside the form, ", blogPost);
        props.submit(blogPost);
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
                <input type='text' ref={blogBody} required></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;