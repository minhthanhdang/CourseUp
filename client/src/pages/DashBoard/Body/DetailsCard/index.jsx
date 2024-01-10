import { Draggable } from 'react-beautiful-dnd'
import { Link } from 'react-router-dom'
import Icon from '../../../../components/shared/Icon'


const DetailsCard = ({ index, content }) => {

  return (
    <Draggable draggableId='index' index={index}>
      {(provided, snapshot) => (
        <Link
          className='block mb-[5px]'
          to={`/`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
            className={`p-[10px] rounded-[3px] bg-white transition-background duration-100 hover:bg-[#ebecf0] ` +
            ((snapshot.isDragging && !snapshot.isDropAnimating) ? `transform rotate-3 shadow-movingCard` : `transform-none shadow-staticCard`)}
          >
            <p className='pb-[11px] text-[15px]'>
              {content.eventId}
            </p>
            <div className='flex justify-between items-center'>
              <div>
                <Icon name='task' style='solid' className='text-[17px] text-green-500' />
              </div>
              <div className='flex flex-row-reverse ml-[2px]'>
                Course Image
              </div>
            </div>

          </div>
        </Link>
      )}
    </Draggable>
  )
}

export default DetailsCard;
