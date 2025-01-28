import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes path="/">
    <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
