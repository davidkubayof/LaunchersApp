import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AddLauncherPage from './pages/AddLauncherPage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/launcher" element={<AddLauncherPage />} />
        <Route path="/details/:id" element={<LauncherDetailsPage />} />
      </Routes>
    </>
  )
}

export default App