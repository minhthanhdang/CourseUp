import { Outlet } from 'react-router-dom'
import NavLeft from './NavLeft'

const Main = () => {
  return (
    <div className='flex relative'>
      <div className='h-screen w-navLeft fixed'>
        <NavLeft />
      </div>
      <div className='pl-navLeft flex-1 w-full'>
        <div className=''>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Main
