import { Routes, Route, useLocation } from 'react-router-dom';
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


      <Route path="/signup" element={<SignUp />} />

      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="myCourses/*" element={<MyCourses />} />
          </Route>
        </Route>
      </Route>
      <Route path="/*" element={<Home />}/>
    </Routes>
  )
}

export default App
