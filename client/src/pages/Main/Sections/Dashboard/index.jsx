import { useEffect, useState } from 'react'
import Header from '../../Header'
import { DragDropContext } from 'react-beautiful-dnd'
import Body from './Body'
import useAxiosPrivate from '../../../../hooks/useAxioxPrivate'


const DashBoard = () => {

  const [ user, setUser ] = useState()
  const [dashboardContent, setDashboardContent] = useState([])
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    const fetchDashboardContent = async() => {
      axiosPrivate
        .get("http://localhost:3000/courses/suggestion")
        .then((res) => {
          console.log('test enrolled')
          console.log(res.data)
        })
        .catch((err) => {
          console.log('test ernoled failed')
          console.error(err.message)
        })
    }
    fetchDashboardContent()
  }, [])

  return (
    <>
      <div className='flex shadow-lg '>
        <div className='bg-bgLighter w-full px-[2rem] overflow-hidden min-h-[100vh]'>

          <Header title='Thanh, welcome back' quote='Learning is a journey that never ends' />

          <Body />

        </div>
      </div>
    </>
  )
}

export default DashBoard;
