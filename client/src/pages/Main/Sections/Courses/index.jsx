import { useState, useEffect } from 'react'
import useAxiosPrivate from '../../../../hooks/useAxioxPrivate'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { ScrollSection } from './ScrollSection'
import { CourseOverviewSection } from './CourseOverviewSection'
import { Footer } from '../../Footer'
import Header from '../../Header'
import Modal from '../../../../components/InfoCard/Modal'
import CourseModal from './CourseModal'

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [suggestion, setSuggestion] = useState([])
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()

  const background = location.state && location.state.background

  useEffect(() => {
    const controller = new AbortController()

    const fetchCourses = async () => {
      axiosPrivate
        .get('/courses/enrolled', {
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

        <Header title='Thanh, welcome back' quote='Learning is a journey that never ends' />

        <CourseOverviewSection />

        <ScrollSection title="Your courses" courses={courses} location={location}/>

        <ScrollSection title="Explore new courses" courses={suggestion} location={location}/>

        <Footer />

        {background && (
          <Routes>
            <Route
              path='course/:courseId'
              element={
                <Modal
                  isOpen
                  onClose={() => navigate(-1)}
                  renderContent={modal => (
                    <CourseModal className='text-[3rem] text-black' />

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


export default Courses;
