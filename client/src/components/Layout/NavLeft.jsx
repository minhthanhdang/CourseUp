import { Link } from 'react-router-dom';
import { Active, LogoutButton, NavItem } from './Components';
import useToggle from '../../hooks/frontend/useToggle';
import { Logo } from '../shared/Logo';

const NavItems = [
  { name: 'Dashboard', to: '/dashboard', icon: 'overview' },
  { name: 'Courses', to:'/myCourses', icon: 'courses' },
  { name: 'Account', to: '/login', icon: 'account' }
]

const NavLeft = () => {

  return (

    <aside className='w-navLeft h-full bg-white shadow-lg z-10 text-[2vw]'>
      <div className='flex flex-col'>


        <div className='flex gap-3 relative justify-center items-center h-32 text-[2rem]'>
          <Logo className='h-[2.5rem] mt-[4px]'/>
          <div className='font-bold text-black xl:flex'>
            CourseUp
          </div>
        </div>

        <div className='row-span-3 px-5 h-full flex flex-col justify-between'>
          { NavItems.map((item) => (
            <NavItem key={item.name} to={item.to}>{item.name}</NavItem>
          )) }
        </div>
        <div className='row-span-6 flex flex-col'/>






      </div>

    </aside>

  )
}

export default NavLeft;
