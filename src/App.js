import './App.css';
import React from 'react';
import Head from './component/Head';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './component/Main';
import Detail from './component/Detail';
import NotFound from './component/NotFound';
import Test from "./Test/Test";


function App(Props) {
  return (
    <div className="App">
        <BrowserRouter>
            <Head />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/Detail/:productId" element={<Detail />}></Route>
                <Route path="/test" element={<Test />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
