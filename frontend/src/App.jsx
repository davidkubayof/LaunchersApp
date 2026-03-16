import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AddLauncherPage from './pages/AddLauncherPage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launcher" element={<AddLauncherPage />} />
        <Route path="/details/:id" element={<LauncherDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
