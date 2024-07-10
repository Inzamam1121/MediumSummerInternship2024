import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <div className="flex gap-4">
        <Nav/>
        <div>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
