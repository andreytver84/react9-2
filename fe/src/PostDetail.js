import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PostDetail() {

    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const [cont, setCont] = useState('');
    let content = '';
    const detail = document.querySelector('.detail');
    const edit = document.querySelector('.edit');

    const getPost = (id) => {
        fetch(`http://localhost:7070/posts/${id}`)
            .then(response => response.json()
                .then(data => {
                    setCont(data.post.content)
                    console.log(data.post.content)
                })
            ).then(() => {
                console.log(cont)
            })
    }

    const editPost = (id) => {
        fetch(`http://localhost:7070/posts/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'content': cont,
                'id': id
            })
        })
            .then(() => navigate('/')).then(() => navigate('/'));
    }

    if (cont !== '') {
        content = cont;
    }

    const deleteHandler = (e) => {
        fetch(`http://localhost:7070/posts/${id}`, { method: 'DELETE' }).then(() => navigate('/'));
    }

    const editHandler = () => {
        detail.classList.add('hide');
        edit.classList.remove('hide');
    }

    useEffect(() => {
        getPost(id);
    }, [])




    const submitSave = (e) => {
        e.preventDefault();
        //console.log(e.target.elements.content.value);
        setCont(e.target.elements.content.value);
        detail.classList.remove('hide');
        edit.classList.remove('hide');
        editPost(id);

    }

    const textAreaHandler = (e) => {
        setCont(e.target.value);
    }

    return (
        <div className="post" >
            <div className="detail">
                <p>{cont}</p>
                <div className="btn-wrap">
                    <a onClick={deleteHandler} className="btn">Удалить</a>
                    <a onClick={editHandler} className="btn">Изменить</a>
                </div>
            </div>
            <div className="edit hide">
                <form onSubmit={submitSave}>
                    <textarea onChange={textAreaHandler} name="content" value={cont}></textarea>
                    <button className="btn">Save</button>
                </form>
            </div>
        </div>
    )
}