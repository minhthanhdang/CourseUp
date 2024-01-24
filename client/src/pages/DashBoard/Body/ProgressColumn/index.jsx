import { Droppable } from 'react-beautiful-dnd'
import DetailsCard from '../DetailsCard'

const ProgressColumn = ({ title, dropID }) => {

  const cardList = [
    {index: 0, title: 'Todo1'},
    {index: 1, title: 'Todo2'},
    {index: 2, title: 'Todo3'},
  ]

  return (
    <Droppable key={title} droppableId={dropID}>
      {provided => (
        <div className='flex flex-col my-[5px] min-h-[400px] w-full rounded-md'>
          <div
            className='h-full px-[5px] grid grid-cols-2 '
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cardList.map(card=>(<DetailsCard index={card.index} />))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  )
}

export default ProgressColumn;
