import CourseCard from './Course'
import { ProgressChart } from './ProgressChart'
import { useHorizontalScroll } from '../../hooks/frontend/useHorizontalScroll'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const HeaderSection = ({ title, quote }) => (
  <div className='relative h-32 w-full'>
    <div className='relative text-[2rem] font-bold h-full flex items-center text-black'>
      {title}
    </div>
    <div className='absolute bottom-0 text-textLight text-[1.4rem]'>
      {quote}
    </div>
  </div>
)


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


export const ScrollSection = ({ title, courses, location }) => {
  const horizontalScroll = useHorizontalScroll()
  const navigate = useNavigate()

  return (
    <div className='overflow-x-hidden'>
      <div className='text-[25px] text-black font-bold '>
        {title}
      </div>

      <div className='py-[30px] h-full overflow-x-scroll whitespace-nowrap custom-scrollbar' ref={horizontalScroll}>
        {courses.map(course => (
          <Link to={`course/${course.id}`} state={{ background: location }}>
            <CourseCard course={course} />
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  )
}


export const FooterSection = () => (
  <div>
    <a rel='author' href='https://github.com/minhthanhdang' className='text-black'>
      Created by Minh Thanh Dang. Images are AI generated.
    </a>
  </div>
)
