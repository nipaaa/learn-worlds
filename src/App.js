import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Home/Banner';
import Home from './components/Home/Home';
import Header from './shared/Header';

function App() {
  return (
   <div>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   </div>
  );
}

export default App;
