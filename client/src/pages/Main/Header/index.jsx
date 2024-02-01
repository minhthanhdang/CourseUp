const Header = ({ title, quote }) => (
  <div className='relative h-32 w-full'>
    <div className='relative text-[2rem] font-bold h-full flex items-center text-black'>
      {title}
    </div>
    <div className='absolute bottom-0 text-textLight text-[1.4rem]'>
      {quote}
    </div>
  </div>
)

export default Header
