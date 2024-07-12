import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Users from './Pages/Users'
import Notifications from './Pages/Notifications'
import BlogForm from './Pages/BlogForm'

function App() {

  return (
    <>
      <div className="flex gap-4">
        <Nav/>
        <div>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/users' element={<Users />}/>
            <Route path='/notifications' element={<Notifications />}/>
            <Route path='/blogform' element={<BlogForm />}/>
          </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
