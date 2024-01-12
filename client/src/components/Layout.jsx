import { Outlet } from 'react-router-dom'
import NavLeft from './Layout/NavLeft'
import { ContentWrapper } from './shared/ContentWrapper';
import NavTop from './Layout/NavTop';

const Layout = () => {
  return (
    <>
      <div className='grid grid-cols-12 h-screen'>
        <div className='col-span-2'>
          <NavLeft />
        </div>
        <div className='col-span-10'>
          <ContentWrapper>
            <div className='grid grid-rows-12 h-full'>
              <div className='row-span-1'>
                <NavTop />
              </div>
              <div className='row-span-11 pt-[20px]'>
                <Outlet />
              </div>
            </div>




          </ContentWrapper>
        </div>
      </div>
    </>
  )
}

export default Layout;
