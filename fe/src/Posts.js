import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {

    const [postList, setPostList] = useState([]);
    const fetchList = () => {
        fetch('http://localhost:7070/posts')
            .then(response => response.json())
            .then(data => {
                setPostList(data);
                //console.log(data)
            })
    }
    useEffect(() => {
        fetchList()
    }, []);


    return (
        <div className="posts">
            {postList.map(post => <Post key={post.id} id={post.id} content={post.content} />)}
        </div>
    )
}