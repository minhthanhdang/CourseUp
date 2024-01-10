import { NavLink } from 'react-router-dom';
import Icon from '../shared/Icon';

const NavTop = () => {
  const pages = [
    { name: 'Dashboard', to: '/dashboard' },
    { name: 'Courses', to: '/myCourses' },
    { name: 'Account', to: '/dashboard' }


  ]

  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-2 flex items-center justify-start'>
        <div className='flex flex-row'>
          {pages.map((page) => (
            <NavLink to={page.to}>
              <div className='px-[30px] text-[18px] font-[700]'>
                {page.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className='col-span-1 flex flex-row gap-[10px] items-center justify-end'>
        <div className='w-11 h-11 rounded-full bg-bgLight3 flex items-center justify-center'>
          <Icon name='search' className='text-[18px]' />
        </div>
        <div className='w-11 h-11 rounded-full bg-bgLight3 flex items-center justify-center'>
          <Icon name='noti' className='text-[18px]' />
        </div>
      </div>
    </div>
  )
}

export default NavTop;
