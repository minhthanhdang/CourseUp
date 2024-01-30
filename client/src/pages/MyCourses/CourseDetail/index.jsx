import { useEffect, useState } from 'react'
import useAxiosPrivate from '../../../hooks/useAxioxPrivate'
import { useParams } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import Icon from '../../../components/shared/Icon'
import CircleAvatar from '../../../components/CircleAvatar'

const CourseDetail = ({ ...rest }) => {
  const [courseData, setCourseData] = useState({})
  const axiosPrivate = useAxiosPrivate()
  const { courseId } = useParams()

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async() => {
      axiosPrivate
        .get(`courses/course/${courseId}`, {
          signal: controller.signal
        })
        .then((res) => {
          console.log("Course data:")
          console.log(res.data)
          setCourseData(res.data)
        })
    }

    fetchData()
  }, [])

  return (

    <div {...rest}>
      <div className='flex flex-col justify-end items-end px-[2rem]'>
        <Icon name='close'  className='text-black text-[18px]  w-10 h-10 rounded-full bg-bgLight flex items-center justify-center' />
      </div>
      <div className='grid grid-cols-7 w-full px-[6rem] py-[2rem]'>

        <div className='col-span-4 flex flex-col gap-4'>

          <div className='text-[2.3rem] font-bold leading-[1rem] pt-[1rem]'>
            {courseData.courseName}
          </div>
          <div className='text-[1.1rem] font-regular'>
          {courseData.description
            ? (`About: ${courseData.description}`)
            : 'This course has no description'
          }
          </div>
          <div className='text-[1.2rem] font-regular flex flex-row items-center gap-5'>
            Admin: {courseData.adminUsername}
            {courseData.adminAvatarLink
              ? (<div></div>)
              : (<CircleAvatar className='w-7 h-7'>{courseData.adminUsername?.charAt(0).toUpperCase()}</CircleAvatar>)
            }
          </div>



        </div>
        <div className='col-span-3'>
          <img src={courseData.imgLink} />
        </div>

      </div>


    </div>

  )
}

export default CourseDetail
