import { useLocation, useNavigate, Routes, Route } from 'react-router-dom'
import Modal from '../../../components/InfoCard/Modal'
import Login from './AuthenticationForm/Login'
import AuthenticationModal from './AuthenticationModal'

export const AuthenticationPopUp = () => {

  const location = useLocation()
  const background = location.state && location.state.background
  const navigate = useNavigate()

  return background && (
    <Routes>
      <Route
        path='/login'
        element={
            <Modal
              isOpen
              onClose={() => navigate(-1)}
              renderContent={modal => (
                <AuthenticationModal children={<Login />} />
              )}
            />
        }
      />
      <Route
        path='/signup'
        element={
            <Modal
              isOpen
              onClose={() => navigate(-1)}
              renderContent={modal => (
                <SignUp />
              )}
            />
        }
      />
    </Routes>
  )
}
