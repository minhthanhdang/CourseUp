import useLogout from '../../hooks/useLogout'
import { NavLink, useNavigate } from 'react-router-dom'
import Icon from '../shared/Icon'

export const LogoutButton = ({ children }) => {
  const logoutApi = useLogout()
  const navigate = useNavigate()

  const logout = async () => {
    await logoutApi()
    navigate('/')
  }

  return (

    <button
      onClick={logout}
      className='rounded-[15px] text-[25px] font-bold w-[80%] bg-red-400 h-[55px] text-center'
    >
      {children}
    </button>
  )
}

export const Active = ({ toggle, isActive }) => {

  return (
    <>
    <div className='flex justify-between items-center w-full rounded-3xl px-[18px] bg-[#152c27] h-[50px]'>
      <div className='text-[20px] text-white'>Active status</div>
      <label  className='relative inline-block w-[60px] h-[34px] '>

        <input className='opacity-0 w-0 h-0'/>
        <span onClick={toggle} className={`rounded-2xl before:rounded-xl absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-black before:absolute before:content-[""] before:h-[26px] before:w-[26px] before:bottom-[4px] ${isActive ? 'before:bg-[#6fbb34] before:left-[1.6vw]' : 'before:bg-[#cf214a] before:left-[4px]'}`}/>

      </label>
    </div>


    </>
  )
}


export const NavItem = ({ to, children }) => {
  return (
    <NavLink to={to}
      className={({ isActive }) => `hover:bg-bgLight rounded-2xl
        ${isActive ? 'bg-bgLight text-primaryText' : ' text-textBlur'}`
      }
    >
      <div className={` h-[48px] flex items-center px-6 py-7 `} >
        <Icon name='dashboard'></Icon>
        <nav className='text-lg font-medium pl-5 '>
          {children}
        </nav>
      </div>
    </NavLink>
  )
}


