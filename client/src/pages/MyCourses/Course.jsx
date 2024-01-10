import CircleAvatar from '../../components/CircleAvatar'
import ProgressBar from '../../components/ProgressBar'

const Course = ({course}) => {
  return (
    <>

    <div className='flex flex-col overflow-hidden items-center hover:bg-bgLight2 rounded-3xl pl-[5px]'>
      <div className='flex flex-row w-full items-center'>

        <div className='px-[3px] py-[15px] rounded-[5px] w-full relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[0.25px] after:bg-[#ccc] after:content-[""]'>
          <div className='flex flex-row gap-[10px] items-center'>
            <CircleAvatar />
            <div className='ml-[12px] text-[20px] font-semibold'>
              {course.name}
            </div>
            <ProgressBar progress={50}/>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}


export default Course
