import { Link } from 'react-router-dom';
const NavLeft = () => {
  return (

    <aside className='flex flex-col overflow-x-hidden h-full w-full bg-black shadow-lg z-10 px-[30px] py-[18px] text-[2vw]'>
      <div className='flex relative justify-center xl:justify-between items-center h-[80px] after:bg-green-700 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[0.5px] after:content-[""] text-[70%]'>
        <div className='font-bold text-white hidden xl:flex'>CourseUp</div>

        <Link to="/">
          <img src="../../../public/assets/logo_512.jpg" className='rounded-full w-[50px] min-w-[50px]' alt='logo' />
        </Link>
      </div>

    </aside>

  )
}

export default NavLeft;
