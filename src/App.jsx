import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'))

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

      {/* 🔥 IMPORTANT LINE */}
      <Route path="/project/:id" element={<ProjectDetails />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App