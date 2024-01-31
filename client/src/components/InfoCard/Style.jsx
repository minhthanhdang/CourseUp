

export const ScrollOverlay = ({children}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full'>
      {children}
    </div>
  )
}

export const ClickableOverlay = ({ elementRef, children}) => {
  return (
    <div ref={elementRef} className='min-h-full w-full bg-opacity-[54%] bg-gray-300 flex justify-center items-center px-[50px] py-auto'>
      {children}
    </div>
  )
}

export const StyledModal = ({ elementRef, children}) => {
  return (
    <div ref={elementRef} className='inline-block relative w-full max-h-[85%] shadow-md bg-white z-50 text-white align-middle rounded-md max-w-[1040px]'>
      {children}
    </div>
  )
}

