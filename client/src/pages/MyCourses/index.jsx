import { useEffect, useState } from 'react'
import useAxiosPrivate from '../../hooks/useAxioxPrivate'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import axios from '../../api/axios'
import Course from './Course'
import Header from '../../components/Header'
import PopCard from '../../components/PopCard'

const MyCourses = () => {
  const [courses, setCourses] = useState([])
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()
  const { auth } = useAuth()
  console.log(auth)

  useEffect(() => {
    const controller = new AbortController()

    const fetchCourses = async () => {
      axiosPrivate
        .get('/courses/user', {
          signal: controller.signal
        })
        .then((res) => {
          console.log(res.data)
          setCourses(res.data)
        })
    }

    fetchCourses()
  }, [])

  return (
    <div className='grid grid-rows-9 gap-5 h-full bg-bgPrimary'>
      <div className='row-span-4 flex justify-center'>
        <PopCard
          color='brown'
          title='Announcements'
          className='w-[85%]' ></PopCard>
      </div>

      <div className='row-span-5 grid grid-cols-1 lg:grid-cols-3 ml-[10px]'>

        <div className='col-span-1 lg:col-span-2 rounded-[15px] px-[10px] grid grid-rows-6 overflow-hidden'>

          <div className='text-[25px] text-black font-bold row-span-1'>
            Your courses
          </div>

          <div className='pt-[5px] h-full overflow-y-scroll custom-scrollbar row-span-5'>
            {courses.map(course => (
              <Course key={course.name} course={course} />
            ))}
          </div>

        </div>


        <div className='flex justify-center items-start'>
          <div className='w-[80%] h-max'>
            <PopCard color='green' title="Python Tic Tac Toe" subtitle="May 2024" button="Complete this task" action={()=>console.log("Testing okay")} />
          </div>
        </div>
      </div>



    </div>
  )
}

const Title = ({children}) => {
  return (
    <div>
      <div className='text-[25px] text-black font-bold'>
        {children}
      </div>
    </div>
  )
}


export default MyCourses;
