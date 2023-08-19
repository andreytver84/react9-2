import { Link } from 'react-router-dom';

export default function Created() {
    return (
        <div className="created">
            <Link className="btn" to="/posts/new" >Создать Post</Link>
        </div>
    )
}