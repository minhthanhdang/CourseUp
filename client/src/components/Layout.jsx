import { Outlet } from 'react-router-dom'
import NavLeft from './Layout/NavLeft'
import { ContentWrapper } from './shared/ContentWrapper';
import NavTop from './Layout/NavTop';

const Layout = () => {
  return (
    <div className='flex relative'>
      <div className='h-screen w-navLeft fixed'>
        <NavLeft />
      </div>
      <div className='ml-navLeft flex-1'>
        <div className=''>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout;
