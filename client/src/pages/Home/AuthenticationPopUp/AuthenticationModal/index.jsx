import { Logo } from '../../../../components/shared/Logo'

const AuthenticationModal = ({children}) => {
  return (
    <div className='grid grid-cols-7 h-full'>
      <div className='col-span-4 flex flex-col items-center bg-white overflow-hidden gap-[0.975rem] rounded-[20px] text-black'>

        <div className='flex h-[155px] w-full items-center py-[40px] px-[50px]'>
          <Logo className='h-full'/>
          <div className='font-semibold text-[2rem] text-[#00BFFF] pb-[8px] pl-[1rem]'>CourseUp</div>
        </div>

        {children}

      </div>

      <div className='col-span-3'>
        <img src='../../public/assets/login_background.png' className='flex items-center justify-center'/>
      </div>
    </div>
  )
}

export default AuthenticationModal
