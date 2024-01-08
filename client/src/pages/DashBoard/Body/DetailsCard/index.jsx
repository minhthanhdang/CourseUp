import { Draggable } from 'react-beautiful-dnd'
import { Link } from 'react-router-dom'

const DetailsCard = ({ index, title }) => {


  return (
    <Draggable draggableId='test' index={index}>
      {(provided, snapshot) => (
        <Link
          className='block mb-[5px]'
          to={`/`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
            className={`p-[10px] rounded-[3px] bg-white transition-background duration-100 hover:bg-[#ebecf0]` +
            (snapshot.isDragging && !snapshot.isDropAnimating) ? `transform rotate-3 shadow-movingCard` : `shadow-staticCard`}
          >
            <p className='pb-[11px] text-[15px]'>
              {title}
            </p>
          </div>
        </Link>
      )}
    </Draggable>
  )
}

export default DetailsCard;
