export const HeaderWrapper = ({ children }) => {
  return (
    <div className='mt-[6px] flex justify-between'>
      {children}
    </div>
  )
}

export const Title = ({ children }) => {
  return (
    <div className='text-[24px] font-medium text-black'>
      {children}
    </div>
  )
}
