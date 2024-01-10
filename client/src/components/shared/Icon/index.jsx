import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'

const toFontAwesome = {
  'task': faBookmark,
  'search': faMagnifyingGlass,
  'noti': faBell
}

const Icon = ({ name, className }) => {
  return (
    <i className={`inline-block text-[15px] font-medium normal-case leading-4`}>
      <FontAwesomeIcon icon={toFontAwesome[name]} className={className}/>
    </i>
  )
}

export default Icon
