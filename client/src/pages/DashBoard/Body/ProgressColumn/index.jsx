import { Droppable } from 'react-beautiful-dnd'
import DetailsCard from '../DetailsCard'

const ProgressColumn = ({ title, dropID }) => {

  const cardList = [
    {index: 0, title: 'title0'},
    {index: 1, title: 'title1'},
    {index: 2, title: 'title2'},
  ]

  return (
    <Droppable key={title} droppableId={dropID}>
      {provided => (
        <div className='flex flex-col my-[5px] min-h-[400px] w-full rounded-md bg-[#F4F5F7]'>
          <div className='pt-[13px] px-[10px] pb-[17px] uppercase text-[#5E6C84] text-[12.5px] truncate'>
            {title}
          </div>
          <div
            className='h-full px-[5px]'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cardList.map((value) => (
              <DetailsCard key={value.title} index={value.index} title={value.title}/>
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  )
}

export default ProgressColumn;
