import NavTop from './NavTop';
import Body from './Body';
import { AuthenticationPopUp } from './AuthenticationPopUp';

const Home = () => {
  return (
    <div className='max-w-[1480px] m-auto'>

      <NavTop />

      <Body />

      <AuthenticationPopUp />

    </div>
  )
}

export default Home;
