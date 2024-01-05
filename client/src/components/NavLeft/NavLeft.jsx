import Modal from '../InfoCard/Modal';
import { NavBackground, LogoLink, LogoStyled, Item, ItemText } from './Style';

const NavLeft = () => {
  return (
    <>
    <Modal />
    <NavBackground>
      <LogoLink to="/test">
        <LogoStyled />
      </LogoLink>


      <Item>
        <ItemText>Dashboard</ItemText>
      </Item>
      <Item>
        <ItemText>Courses</ItemText>
      </Item>
    </NavBackground>


    </>
  )
}

export default NavLeft;
