import './App.css';
import Posts from './components/posts.jsx';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Form from './components/form';
import ShowPost from './components/showPost';

function App() {
  return (
    <div>
      <h1>Diaries Online</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/form'>Add Article</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/form' element={<Form />} />
          <Route path='/article/:id' element={<ShowPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;