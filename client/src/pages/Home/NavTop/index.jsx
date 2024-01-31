import { useLocation, Link } from 'react-router-dom'
import { Logo } from '../../../components/shared/Logo'

const NavTop = () => {
  const location = useLocation()
  return (
    <div className='h-[12rem] py-[4rem] px-[3rem] md:px-[4rem] xl:px-[8rem]'>
      <div className='flex justify-between h-full'>
        <div className='flex h-full items-center'>
          <Logo className='h-[80%]'/>
          <div className='font-semibold text-[2rem] text-[#00BFFF] pb-[8px] pl-[1rem]' >CourseUp</div>
        </div>

        <div className='flex z-5 gap-[4rem] text-[1.2rem]'>
          <Link to='/login' state={{ background: location }}><div>Login</div></Link>
          <Link to='/signup' state={{ background: location }}><div>SignUp</div></Link>
        </div>
      </div>
    </div>
  )
}

export default NavTop
