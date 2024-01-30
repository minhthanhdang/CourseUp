const CircleAvatar = ({ src, className, children }) => {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center border-[1px]" >
      <span className="text-black font-bold text-lg ">{children}</span>
    </div>
  )
}

export default CircleAvatar
