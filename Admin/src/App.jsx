import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Notifications from "./Pages/Notifications";
import BlogForm from "./Pages/BlogForm";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="flex gap-4">
        <BrowserRouter>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/blogform" element={<BlogForm />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
