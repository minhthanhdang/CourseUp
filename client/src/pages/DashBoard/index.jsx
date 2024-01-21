import useRefreshToken from '../../hooks/useRefreshToken'
import { DashBoardWrapper } from './styles'
import { useEffect, useState } from 'react'
import Body from './Body'
import axios from '../../api/axios'

const DashBoard = () => {

  const [ user, setUser ] = useState()
  const [dashboardContent, setDashboardContent] = useState([])

  useEffect(() => {
    const fetchDashboardContent = async() => {
      axios
        .get("http://localhost:3000/dashboard")
        .then((res) => {
          setDashboardContent(res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.error(err.message)
        })
    }
    fetchDashboardContent()
  }, [])

  return (
    <>

      <DashBoardWrapper>
      </DashBoardWrapper>
    </>
  )
}

export default DashBoard;
