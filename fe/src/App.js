import { Route, Routes } from 'react-router-dom';
import './App.css';
import Created from './Created';
import Posts from './Posts';
import NewPost from './NewPost';
import PostDetail from './PostDetail';



export default function App() {
  return (

    <div className='app'>
      <Created />
      <div className="page">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </div>

  );
}
