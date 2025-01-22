import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductCard name="Audio Setup" price="2250" description ="this is goasdmnasldalkj asldjaskdja asldjaslkdjaslkdjasl"
      image = "https://www.unitedbreweries.com/images/our-brands/heineken.jpg"></ProductCard>
    </>
  )
}

export default App
