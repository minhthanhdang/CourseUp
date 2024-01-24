import { useEffect, useState } from 'react'
import useAxiosPrivate from '../../../hooks/useAxioxPrivate'

const CourseDetail = ({ courseId, ...rest }) => {
  const [courseData, setCourseData] = useState({})
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async() => {
      axiosPrivate
        .get(`courses/course/${courseId}`, {
          signal: controller.signal
        })
        .then((res) => {
          console.log(res.data)
          setCourseData(res.data)
        })
    }

    fetchData()
  }, [])

  return (

    <div {...rest}>
      This is CourseDetail
    </div>
  )
}

export default CourseDetail
