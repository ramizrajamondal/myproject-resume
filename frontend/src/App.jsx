import './App.css'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import EmailVerifyPage from './pages/EmailVerifyPage'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ResumeScorePage from './pages/ResumeScorePage'
import LandingPage from './pages/LandingPage'
import AllResumePage from "./pages/AllResumePage"
import ProtectedRoute from './utils/ProtectedRoute'
import ProtectedRouteForHome from "./utils/ProtectedRouteForHome"
import JobPage from './pages/JobPage'

function App() {
  return (
   <div className='main'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/auth' element={<ProtectedRoute><AuthPage /></ProtectedRoute>} />
      <Route path='/verifyemail' element={<ProtectedRoute><EmailVerifyPage /></ProtectedRoute>} />
      <Route path='/home' element={<ProtectedRouteForHome><HomePage /></ProtectedRouteForHome>} />
      <Route path='/home/checkresumescore' element={<ProtectedRouteForHome><ResumeScorePage /></ProtectedRouteForHome>} />
      <Route path='/home/allresume' element={<ProtectedRouteForHome><AllResumePage /></ProtectedRouteForHome>} />
      <Route path='/home/tranding-jobs' element={<ProtectedRouteForHome><JobPage /></ProtectedRouteForHome>} />
    </Routes>
    </BrowserRouter>
   </div>
  )
}
export default App
