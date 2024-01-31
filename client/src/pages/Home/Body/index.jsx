const Body = () => (
  <div className='h-[30rem] grid grid-flow-col grid-cols-12'>
    <div className='col-span-6 ps-[8rem] flex flex-col items-end justify-center pb-[5rem]'>
      <h1 className='leading-[3rem] text-[50px] font-bold text-center text-[#6b5a45]'>Welcome to CourseUp!!!</h1>
      <h2 className='text-[20px] font-semibold text-center text-textLight'>Enhance your teaching and learning experience with our Education Management System</h2>
    </div>
    <div className='col-span-6 flex flex-col justify-center items-center'>
      <img src='../../../public/assets/home.jpg' className='mt-[-140px] -z-50 w-[75%]' />
      <div><a href="https://www.freepik.com/free-vector/lesson-concept-illustration_20906896.htm#query=blue%20teacher&position=13&from_view=search&track=ais&uuid=5cffa3e7-08da-405c-a32a-38d051322904">Image by storyset</a> on Freepik</div>
    </div>
  </div>
)

export default Body
