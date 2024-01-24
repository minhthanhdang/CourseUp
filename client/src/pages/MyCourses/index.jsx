import { Fragment, useEffect, useState } from 'react'
import useAxiosPrivate from '../../hooks/useAxioxPrivate'
import { Routes, useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { Route } from 'react-router-dom'
import { CourseOverviewSection, FooterSection, HeaderSection, ScrollSection } from './Components'
import { Calendar } from '../../components/Calendar'
import Modal from '../../components/InfoCard/Modal'
import CourseDetail from './CourseDetail'

const MyCourses = () => {
  const [courses, setCourses] = useState([])
  const [suggestion, setSuggestion] = useState([])
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()
  const { auth } = useAuth()

  const background = location.state && location.state.background

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

    const fetchSuggestion = async () => {
      axiosPrivate
        .get('/courses/suggestion', {
          signal: controller.signal
        })
        .then((res) => {
          console.log(res.data)
          setSuggestion(res.data)
        })
    }
    fetchCourses()
    fetchSuggestion()
  }, [])


  return (

    <div className='flex shadow-lg '>
      <div className='bg-bgLighter w-full px-[3rem] overflow-hidden'>

        <HeaderSection title='Thanh, welcome back' quote='Learning is a journey that never ends' />

        <CourseOverviewSection />

        <ScrollSection title="Your courses" courses={courses} location={location}/>

        <ScrollSection title="Explore new courses" courses={suggestion} location={location}/>

        <FooterSection />

        {background && (
          <Routes>
            <Route
              path='course/:courseId'
              element={
                <Modal
                  isOpen
                  onClose={() => navigate(-1)}
                  renderContent={modal => (
                    <CourseDetail className='text-[3rem] text-black' />

                  )}
                />
              }
            />
          </Routes>
        )}
      </div>


    </div>

  )
}



export default MyCourses;
