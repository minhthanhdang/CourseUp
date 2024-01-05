
export const CredInput = ({ ...props }) => {
  return (

    <input
      className='rounded-[20px] shadow-input h-[62px] px-[1.1rem]'
      {...props}
    />

  )
}

export const SubmitButton = ({ children, ...props }) => {
  return (
    <button
      className='bg-[#0856CF] h-[50px] rounded-[25px] shadow-purple text-white font-bold text-[0.923rem] w-[130px] px-[20px] transition-all duration-[.3s] w'
      { ...props }>
      { children }
    </button>
  )
}
