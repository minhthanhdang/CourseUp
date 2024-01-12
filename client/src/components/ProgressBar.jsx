

const ProgressBar = ({progress}) => {
  return (
    <div className='flex flex-row justify-end items-center mt-[0px]'>
      <div className='w-[100px] h-[10px] rounded-[10px] bg-bgLight2'>
        <div className={`h-full rounded-[10px] bg-[#0a3d31]`} style={{ width: `${progress}%`}} />
      </div>
      <div className='ms-[12px]'>
        {progress + `%`}
      </div>
    </div>
  )
}

export default ProgressBar
