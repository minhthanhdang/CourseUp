import { Outlet, Link } from 'react-router-dom'
import { useHorizontalScroll } from '../../../../../hooks/frontend/useHorizontalScroll'
import CourseCard from '../CourseCard'

export const ScrollSection = ({ title, courses, location }) => {
  const horizontalScroll = useHorizontalScroll()

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
