

const ProgressBar = ({progress}) => {
  return (
    <div>
      <div className='w-[100px] h-[10px] rounded-[10px] bg-bgLight2 mt-[6px]'>
        <div className={`h-full rounded-[10px] bg-[#0a3d31] w-[${progress}%]`} />

      </div>
    </div>
  )
}

export default ProgressBar
