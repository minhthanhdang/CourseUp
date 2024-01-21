import Icon from '../shared/Icon'

export const Calendar = () => {
  return (
    <div className='px-8 py-6 bg-white  rounded-2xl'>
      <div className='flex w-full '>
        <div className='w-full flex justify-between items-center'>
          <Icon name='prevPage' className='scale-y-150 text-textBlur'/>
          <div className='font-semibold text-[1.1rem]'>
            January 2024
          </div>
          <Icon name='nextPage' className='scale-y-150 text-textBlur'/>
        </div>
      </div>
      {// DAY PICKER
      }
      <div>
        <Day />
      </div>
    </div>
  )
}

const Day = ({ isChosen }) => {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const baseDate = new Date('January 15, 2024 00:00:01')
  const Dates = [
    baseDate,
    new Date(baseDate.getTime() + 24 * 60 * 60 * 1000),
    new Date(baseDate.getTime() + 2 * 24 * 60 * 60 * 1000),
    new Date(baseDate.getTime() + 3 * 24 * 60 * 60 * 1000),
    new Date(baseDate.getTime() + 4 * 24 * 60 * 60 * 1000),
    new Date(baseDate.getTime() + 5 * 24 * 60 * 60 * 1000),
    new Date(baseDate.getTime() + 6 * 24 * 60 * 60 * 1000)
  ];



  return (
    <div className='flex items-center justify-center '>
      {Dates.map(date=>(
        <div className='inline-flex flex-col gap-2 hover:bg-orange-400 rounded-full py-[5px] px-[2px]'>
          <div className='flex rounded-full justify-center items-center bg-bgLighter font-bold hover:bg-orange-400 text-textBlur hover:text-black'>
            {daysOfWeek[date.getDay()]}
          </div>
          <div className='flex rounded-full justify-center items-center bg-bgLight px-[5px] font-bold text-black hover:text-white hover:bg-black'>
            {date.getDate()}
          </div>
      </div>
      ))}

    </div>
  )
}
