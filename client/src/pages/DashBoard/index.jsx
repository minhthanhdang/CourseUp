import NavLeft from '../../components/NavLeft/NavLeft'
import useRefreshToken from '../../hooks/useRefreshToken'
import Header from '../../components/Header'
import { DashBoardWrapper } from './styles'
import { useEffect, useState } from 'react'
import Breadcrumbs from '../../components/Breadcrumbs'
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
      <NavLeft />
      <DashBoardWrapper>
        <Breadcrumbs items={['Haha', "Hahaha"]} />
        <Header />
        <Body dashboardContent={dashboardContent}/>
      </DashBoardWrapper>
    </>
  )
}

export default DashBoard;
