import { Link } from 'react-router-dom';

export default function Posts(props) {
    const data = props;
    const id = props.id;

    return (
        <Link to={`/posts/${id}`} >
            <div className="post">
                <p>{data.content}</p>
            </div>
        </Link>
    )
}