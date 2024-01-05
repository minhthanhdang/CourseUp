import { Routes, Route } from 'react-router-dom';
import NavLeft from './components/NavLeft/NavLeft';
import Test from './pages/Test';
import Login from './pages/Login';

function App() {

  return (
    <Routes>
      <Route path="/" element={<NavLeft />}>

      </Route>
      <Route path="/test" element={<Test />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
