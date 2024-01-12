
export const TopActions = ({children}) => {
  return (
    <div className='w-[35%] pt-[5px]'>
      {children}
    </div>
  )
}

export const Type = ({children}) => {
  return(
    <div className='flex items-center'>
      {children}
    </div>
  )
}

export const TopActionsRight = ({children}) => {
  <div className='flex items-center ml-[4px]'>
    {children}
  </div>
}

export const Content = ({children}) => {
  <div className='flex pt-0 px-[30px] pb-[60px]'>
    {children}
  </div>
}

export const Left = ({children}) => {
  <div className='w-[65%] pr-[50px]'>
    {children}
  </div>
}

export const Right = ({children}) => {
  <div className='w-[35%] pt-[5px]'>
    {children}
  </div>
}
