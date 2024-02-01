import { NavLink } from 'react-router-dom'
import Icon from '../../../../components/shared/Icon'


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

