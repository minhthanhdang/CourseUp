import { useEffect, useState } from 'react'
import useAxiosPrivate from '../../hooks/useAxioxPrivate'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import axios from '../../api/axios'
import Course from './Course'
import Header from '../../components/Header'

const MyCourses = () => {
  const [courses, setCourses] = useState([])
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()
  const userId = useOutletContext()
  const { auth } = useAuth()
  console.log(auth)

  useEffect(() => {
    const fetchCourses = async () => {
      axiosPrivate
        .get('http://localhost:3000/courses/user' )
        .then((res) => {
          console.log(res.data)
          setCourses(res.data)
        })
    }

    fetchCourses()
  }, [])

  return (
    <>
    <Header title='Course Management' />
    <div className='grid grid-cols-1 lg:grid-cols-2 ml-[10px]'>

      <div className='bg-bgPrimary rounded-[15px] flex flex-col px-[10px] py-[20px]'>
        <Title>Your courses</Title>
        <div className='pt-[5px]'>
          {courses.map(course => (
            <Course key={course.name} course={course} />
          ))}
        </div>
      </div>

      <div>

      </div>
    </div>
    </>
  )
}

const Title = ({children}) => {
  return (
    <div>
      <div className='text-[25px] pt-[30px] text-black font-bold'>
        {children}
      </div>
    </div>
  )
}


export default MyCourses;
