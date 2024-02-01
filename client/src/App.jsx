import { Routes, Route, useLocation } from 'react-router-dom';
import DashBoard from './pages/Main/Sections/Dashboard';
import RequireAuth from './features/auth/RequireAuth';
import Courses from './pages/Main/Sections/Courses';
import PersistLogin from './features/auth/PersistLogin';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {

  return (
    <Routes>

      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}>
          <Route element={<Main />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="myCourses/*" element={<Courses />} />
          </Route>
        </Route>
      </Route>

      <Route path="/*" element={<Home />}/>

    </Routes>
  )
}

export default App
