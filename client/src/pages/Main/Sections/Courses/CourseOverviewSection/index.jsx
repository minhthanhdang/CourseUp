import { ProgressChart } from './Components/ProgressChart'

export const CourseOverviewSection = () => {
  return (
    <section className='py-6 '>
      <div className='bg-white shadow-lg rounded-3xl inline-flex flex-col mx-6 transition-all duration-100 hover:translate-x-2 hover:-translate-y-4 hover:scale-105 py-[20px] px-[20px]'>
        <div className='font-semibold text-[1.25rem]'>Activity</div>
        <ProgressChart />
      </div>
      <div className='inline-flex mx-6 transition-all duration-100 hover:translate-x-2 hover:-translate-y-4 hover:scale-105 align-top'>
        <summary className='bg-bgDark text-white shadow-lg flex flex-col items-center rounded-3xl w-[20rem] h-[18rem] py-6 gap-2'>
          <div className='w-[16rem]'>
            <div className=' text-xl'>
              Overview
            </div>
          </div>
          <div className='text-[2.8rem] font-semibold'>
            11 courses
          </div>
        </summary>
      </div>
    </section>
  )
}
