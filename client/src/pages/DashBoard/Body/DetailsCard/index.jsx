import { Draggable } from 'react-beautiful-dnd'
import { Link } from 'react-router-dom'
import Icon from '../../../../components/shared/Icon'


const TaskCard = ({ index }) => {

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
              Contennttttt
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



const DetailsCard = ({ index, content }) => {
  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          className='block mb-[5px] col-span-1 w-full'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className=' mx-6 transition-all duration-100 hover:translate-x-2 hover:-translate-y-4 hover:scale-105 w-full'>
            <div className='bg-white shadow-lg flex flex-col items-center rounded-3xl h-[18rem] py-6 gap-2 w-full'>
              <p className='pb-[11px] text-[15px]'>
                Contennttttt
                {content}
              </p>

            </div>
          </div>
          {/*<div
            className={`p-[10px] rounded-[3px] bg-white transition-background duration-100 hover:bg-[#ebecf0] ` +
            ((snapshot.isDragging && !snapshot.isDropAnimating) ? `transform rotate-3 shadow-movingCard` : `transform-none shadow-staticCard`)}
          >

          </div>*/}
        </div>
      )}
    </Draggable>
  )
}

export default DetailsCard
