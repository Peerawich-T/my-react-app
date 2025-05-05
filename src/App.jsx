import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NewPage from './NewPage'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import HomePage from './HomePage'
function App() {


  return (
    <>
      <BrowserRouter>
      <div>
    

        {/* This part changes with routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/newPage" element={<NewPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App
