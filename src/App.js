import './App.css'
import Header from './Header.js'
import About from './About.js'
import Projects from './Projects.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='https://RafaelDomingues41431.github.io/Portfolio/' element={<About />} />
          <Route path='https://RafaelDomingues41431.github.io/Portfolio/projects' element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
