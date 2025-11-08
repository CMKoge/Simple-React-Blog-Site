import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx"
import FormPage from "./pages/FormPage.jsx";
import './App.css'

function App() {

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/new-post">Post</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-post" element={<FormPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
