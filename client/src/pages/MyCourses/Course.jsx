

const CourseCard = ({ course }) => {
  return (
    <div className='inline-block mx-6 transition-all duration-100 hover:translate-x-2 hover:-translate-y-4 hover:scale-105'>
      <div className='bg-white shadow-lg flex flex-col items-center rounded-3xl w-[20rem] h-[18rem] py-6 gap-2'>
        <div className='w-[16rem]'>
          <img src={course.src} className=' object-contain rounded-3xl m-auto'/>
        </div>
        <div className='text-[20px]'>
          {course?.name}
        </div>
      </div>
    </div>
  )
}

export default CourseCard
