
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/blogs/Blogs';
import Chart from './components/chart/Chart';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import NotFound from './components/Not-Found/NotFound';
import Review from './components/Review/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/chart' element={<Chart></Chart>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
