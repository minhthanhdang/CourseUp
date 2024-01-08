import NavLeft from '../../components/NavLeft/NavLeft'
import useRefreshToken from '../../hooks/useRefreshToken'
import Header from './Header'
import { DashBoardWrapper } from './styles'
import { useState } from 'react'
import Breadcrumbs from '../../components/Breadcrumbs'
import Body from './Body'

const DashBoard = () => {

  const [ user, setUser ] = useState()

  return (
    <>
      <NavLeft />
      <DashBoardWrapper>
        <Breadcrumbs items={['Haha', "Hahaha"]} />
        <Header />
        <Body />
      </DashBoardWrapper>
    </>
  )
}

export default DashBoard;
