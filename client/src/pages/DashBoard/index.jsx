import useRefreshToken from '../../hooks/useRefreshToken'
import { DashBoardWrapper } from './styles'
import { useEffect, useState } from 'react'
import axios from '../../api/axios'
import ProgressColumn from './Body/ProgressColumn'
import { DragDropContext } from 'react-beautiful-dnd'
import Body from './Body'
import useAxiosPrivate from '../../hooks/useAxioxPrivate'

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


          <Body />

        </div>
      </div>
    </>
  )
}

export default DashBoard;
