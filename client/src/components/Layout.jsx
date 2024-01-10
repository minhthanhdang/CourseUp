import { Outlet } from 'react-router-dom'
import NavLeft from './NavLeft/NavLeft'
import { ContentWrapper } from './shared/ContentWrapper';
import NavTop from './Layout/NavTop';

const Layout = () => {
  return (
    <>
      <NavLeft />
      <ContentWrapper>
        <NavTop />
        <Outlet />
      </ContentWrapper>

    </>
  )
}

export default Layout;
