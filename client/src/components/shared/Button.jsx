const StyledButton = ({
  isWorking, onClick, children
}) => {
  return (
    <button
      className='inline-flex items-center justify-center h-[32px] align-middle leading-1 p-0 whitespace-nowrap rounded-md transition-all appearance-none text-[14.5px] hover:bg-[#EBECF0] '
      onClick={isWorking ? onClick : null}
      >
      {children}
    </button>
  )
}

export default StyledButton;

