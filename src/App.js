
import './App.css';

import { Link, Route, Routes } from 'react-router-dom';

import Board from './componant/Board';
import About from './componant/About';
import Entery from './componant/Entery';

function App() {
  return (
    <div className='App'>
      <nav>
        

      <Link to='/'>로고</Link>
        <Link to='/about'>회사소개</Link>
        <Link to='/board'>공지사항</Link>
      </nav>
      
      <Routes>
      <Route path='/' element = {<Entery></Entery>}></Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/board' element={<Board></Board>}> </Route>
      </Routes>
      <aside>나는 퀵</aside>
      <footer>나는 하단</footer>
    </div>
  );
}

export default App;