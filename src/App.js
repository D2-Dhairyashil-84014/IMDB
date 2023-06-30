import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Movielist from './components/movielist/movielist';
import Moviedetail from './pages/movieDetail/moviedetail';
function App() {
  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='movie/:id'  element={<Moviedetail />} />
          <Route path='movies/:type'  element={<Movielist />} />
          <Route path='/*'  element={<h1>error page</h1>} />
        </Routes>
    </div>
  );
}

export default App;
