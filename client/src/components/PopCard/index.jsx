import { GradientCard } from '../shared/GradientCard'

const PopCard = ({ color, title, subtitle, button, action, className }) => {
  return (
    <GradientCard color={color} className={`py-[30px] px-[20px] ${className}`}>

      <div className='font-bold text-[38px] text-white leading-8'>
        {title}
      </div>
      <div className='font-bold text-[23px] text-[#b5cca7]'>
        {subtitle}
      </div>

      <div className='flex justify-center mt-[15px]'>
        <button
          className='h-14 w-44 bg-[#05261e] rounded-2xl text-white font-[20px]'

          onClick={action} >{button}</button>

      </div>


    </GradientCard>
  )
}

export default PopCard
