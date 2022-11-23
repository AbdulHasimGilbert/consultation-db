import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Lecturer from "./pages/Lecturer";
import {useSelector, useDispatch} from "react-redux";

import { Button } from "antd";
import { Toaster } from "react-hot-toast";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const {loading} = useSelector(state => state.alerts);
  return (
    <BrowserRouter>
    {loading && (<div className="spinner-parent">
      <div class="spinner-border" role="status">
        
      </div>
    </div>)}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes>
        <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
        <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/lecturer' element={<ProtectedRoute><Lecturer /></ProtectedRoute>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
