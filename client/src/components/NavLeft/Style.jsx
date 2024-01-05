import { NavLink } from 'react-router-dom'

// Background of Left Nav
export const NavBackground = ({children}) => {
  return (
    <aside className='
      fixed top-0 left-0 overflow-x-hidden h-screen w-[64px] bg-black transition-all duration-100 hover:w-[200px] hover:shadow-lg group'>
      {children}
    </aside>
  )
}

// Logo Styled
export const LogoStyled = () => {
  return(
    <img src="../../../public/assets/SVG/logo.svg" viewBox="0 0 75.76 75.76" className='w-[48px] ml-[8px] p-[10px] inline-block'/>
  )
}

// Logo Container
export const LogoLink = ({ to, children }) => {
  return (
    <NavLink to={to} className='block relative left-0 mt-[20px] mb-[10px] transition-left duration-100'>
      {children}
    </NavLink>
  )
}

// Nav tabs container
export const Item = ({ children }) => {
  return (
    <div className='relative w-full h-[42px] leading-[42px] pl-[64px] text-white transition-colors duration-100 hover:bg-opacity-20 hover:bg-white'>
      {children}
    </div>
  )
}

export const ItemText = ({ children }) => {
  return (
    <div className='relative right-[12px] invisible opacity-0 uppercase transition-all transition-right transition-visibility font-bold text-[12px] group-hover:right-0 group-hover:visible group-hover:opacity-100'>
      {children}
    </div>
  )
}
