

export const ScrollOverlay = ({children}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full'>
      {children}
    </div>
  )
}

export const ClickableOverlay = ({ elementRef, children}) => {
  return (
    <div ref={elementRef} className='min-h-full bg-opacity-[54] bg-trueGray-800 flex justify-center items-center p-[50px]'>
      {children}
    </div>
  )
}

export const StyledModal = ({ elementRef, children}) => {
  return (
    <div ref={elementRef} className='inline-block relative w-full shadow-md bg-white z-50 text-white align-middle rounded-md max-w-[1040px] min-h-[100vh]'>
      {children}
    </div>
  )
}

