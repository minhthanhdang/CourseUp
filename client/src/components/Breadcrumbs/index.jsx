import { Fragment } from 'react'

const Breadcrumbs = ({ items }) => {
  return (
    <div className='color-[#5E6C84] text-[15px]'>
      {items.map((item, index) => (
        <Fragment key={item}>
          {index !== 0 && <span className='relative top-[2px] mx-[10px] text-[15px]'>/</span>}
          {item}
        </Fragment>
      ))}
    </div>
  )
}

export default Breadcrumbs;
