import { useEffect, useState } from 'react'
import useAxiosPrivate from '../../hooks/useAxioxPrivate'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

import { CourseOverviewSection, FooterSection, HeaderSection, ScrollSection } from './Components'
import { ProgressChart } from './ProgressChart'
import { Calendar } from '../../components/Calendar'

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

  const staticCourses = [
    { name: 'Cybersecurity', src: '../../../assets/cybersecurity.jpg'},
    { name: 'AI application in quantum energy', src: '../../../assets/ai_in_energy.jpg'},
    { name: 'Computer Systems', src: '../../../assets/computer_systems.jpg'}

  ]


  return (
    <div className='flex shadow-lg '>
      <div className='bg-bgLighter w-[64rem] px-[2rem] overflow-hidden'>

        <HeaderSection title='Thanh, welcome back' quote='Learning is a journey that never ends' />

        <CourseOverviewSection />

        <ScrollSection title="Your courses" courses={staticCourses} />

        <ScrollSection title="Explore new courses" courses={staticCourses} />

        <FooterSection />

      </div>
      <div className='bg-bgLight flex-1 px-[2rem]'>
        <Calendar />
      </div>

    </div>
  )
}



export default MyCourses;
