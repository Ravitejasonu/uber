import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/CaptainLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'

function App() {


  return (
   <div className="">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
   
    
    </Routes>
    
   </div>
  )
}

export default App
