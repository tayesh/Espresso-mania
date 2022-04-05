
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chart from './components/chart/Chart';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import useReviews from './components/hooks/useReviews';
import Review from './components/Review/Reviews';

function App() {
  const [reviews1, setReviews1] = useReviews()
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home review={reviews1}></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/chart' element={<Chart></Chart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
