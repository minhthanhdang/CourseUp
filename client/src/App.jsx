import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import SignUp from './pages/Signup';
import RequireAuth from './features/auth/RequireAuth';
import MyCourses from './pages/MyCourses';
import Layout from './components/Layout';
import PersistLogin from './features/auth/PersistLogin';
import Home from './pages/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="myCourses" element={<MyCourses />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
