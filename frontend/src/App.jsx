import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Login from './pages/Home/login'
import SignUp from './pages/Home/signup'
import { ToastContainer, toast } from 'react-toastify';
import AdminHomePage from './pages/admin/adminHomePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <ToastContainer />
    <Routes path="/">
    <Route path="/" element={<Home/>}/>
    <Route path="/login/*" element={<Login/>}/>
    <Route path="/signup/*" element={<SignUp/>}/>
    <Route path="/admin/*" element={<AdminHomePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
