import React from 'react';
import LandingPage from './components/Pages/LandingPage';
import Banner from './components/molecules/Banner/Banner'
import Entrepreneurship from './components/Pages/Entrepreneurship';
import BookDetail from './components/Pages/BookDetails/BookDetail';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App=()=> {
  console.log("hello")
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/entrepreneurship' element={<Entrepreneurship/>} />
          <Route path='/BookDetail' element={<BookDetail/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
