import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faMagnifyingGlass, faBell, faBarsProgress, faBookOpen, faGreaterThan, faLessThan, faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons'

const toFontAwesome = {
  'task': faBookmark,
  'search': faMagnifyingGlass,
  'noti': faBell,
  'dashboard': faBarsProgress,
  'courses': faBookOpen,
  'nextPage': faGreaterThan,
  'prevPage': faLessThan,
  'close': faXmark
}

const Icon = ({ name, ...rest }) => {
  return (
    <i className={`inline-block text-[15px] font-medium normal-case leading-4`} {...rest}>
      <FontAwesomeIcon icon={toFontAwesome[name]} />
    </i>
  )
}

export default Icon
