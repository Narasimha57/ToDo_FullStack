import  React ,{ useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from './components/Todo'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBAr'
import HomePage from './components/HomePage';
// import UserProfileNavbar from './components/UserProfileNavbar'; 
import UserDashboard from './components/UserDashboard';
import History from './components/History';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/todos" element={<Todo />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/history" element={<History/>} />
    </Routes>
    {/* <UserProfileNavbar/> */}
  </Router>
  )
}

export default App
