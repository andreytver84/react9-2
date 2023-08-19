import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost() {

    const [postContent, setPostContent] = useState('');
    const navigate = useNavigate();

    const onSubmitHandle = (e) => {
        e.preventDefault();
        //console.log(e.target.elements.content.value);
        setPostContent(e.target.elements.content.value);
    }
    ///console.log(postContent);
    const addPost = (content) => {
        fetch('http://localhost:7070/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        }).then(() => navigate('/'));
    }


    useEffect(() => {
        if (postContent !== '') {
            addPost(postContent)
        }
    }, [postContent])


    return (
        <div className="post">
            <h2>New Post</h2>
            <form onSubmit={onSubmitHandle}>
                <textarea name="content"></textarea>
                <button type="submit" className="btn" >Send</button>
            </form>
        </div>
    );
}