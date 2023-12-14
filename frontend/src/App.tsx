import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Navbar from './Layout/Navbar';
import Getallemployee from './Module/pages/Getallemp';
import Postemployee from './Module/pages/Postemp';
import PutempById from './Module/pages/Putemp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={"/" } element={<Getallemployee/>}></Route>
        <Route path={"/add" } element={<Postemployee/>}></Route>
        <Route path={"/update/:Id"} element={<PutempById/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
