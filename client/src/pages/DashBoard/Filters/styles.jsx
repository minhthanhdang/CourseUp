import { forwardRef } from 'react'

export const FiltersWrapper = ({children}) => {
  return(
    <div className='flex items-center mt-[24px]'>
      {children}
    </div>
  )
}

export const FilterButton = ({ children, ...prop }) => {
  return (
    <button {...prop} className='ml-[6px]'>
      {children}
    </button>
  )
}

export const SearchInput = forwardRef(({ icon, className, filter, onChange, ...inputProps }, ref) => {
  const handleChange = event => {
    if(!filter || filter.test(event.target.value)) {
      onChange(event.target.value, event)
    }
  }

  return (
    <div className={`relative inline-block h-[32px] w-full ${className}`}>

    </div>
  )
})
