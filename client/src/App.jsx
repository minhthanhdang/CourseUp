import { Routes, Route } from 'react-router-dom';
import NavLeft from './components/NavLeft/NavLeft';
import Test from './pages/Test';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import SignUp from './pages/Signup';
import RequireAuth from './features/auth/RequireAuth';
import MyCourses from './pages/MyCourses';
import Layout from './components/Layout';

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/test" element={<Test />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route element={<RequireAuth />}>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="myCourses" element={<MyCourses />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
