import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  Searchbar  from './Components/Searchbar.jsx'
import UploadButton from "./Components/UploadButton.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Searchbar/>
    <UploadButton/>
    {/* <DropdownInput/> */}
  
  </React.StrictMode>,
)
