
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chart from './components/chart/Chart';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/chart' element={<Chart></Chart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
