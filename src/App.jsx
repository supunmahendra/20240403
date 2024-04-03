import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Search } from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
      <Navbar></Navbar>
      <Search></Search>





      </div>
    
    
    </>
  )
}

export default App
