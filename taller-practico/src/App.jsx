import { BrowserRoter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

function App() 
{
  return (
    <Router>
      <nav>
        <link to="/">Inicio</link> | <link to="/ayuda">Ayuda</link>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/ayuda" element={<Help></Help>}></Route>
      </Routes>
      <Home>

      </Home>
    </Router>
  )
}

export default App
