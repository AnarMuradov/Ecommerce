import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import WishList from './Pages/WishList';
import Basket from './Pages/Basket';
import Detail from './Pages/Detail';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/"  element={<MainLayout/>}>
        <Route  index  element={<Home/>}/>
        <Route  path='/WishList'  element={<WishList/>}/>
        <Route  path='/Basket'  element={<Basket/>}/>
        <Route  path='/Detail/:id'  element={<Detail/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
