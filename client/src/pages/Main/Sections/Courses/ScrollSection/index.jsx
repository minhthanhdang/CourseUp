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
        {courses
          ? courses.length === 0
            ? (
              <div>No course to show. Ready to begin your journey?</div>

            )
            : courses.map(course => (
              <Link to={`course/${course.id}`} state={{ background: location }}>
                <CourseCard course={course} />
              </Link>
            ))
          : (<div>No course to show. Ready to begin your journey?</div>)
        }
      </div>
      <Outlet />
    </div>
  )
}
