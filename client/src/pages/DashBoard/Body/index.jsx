import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import ProgressColumn from './ProgressColumn';

const Body = ({ status }) => {

  const isPositionChanged = (destination, source) => {
    if (!destination) return false;
    const isSameList = destination.droppableId === source.droppableId;
    const isSamePosition = destination.index === source.index;
    return !isSameList || !isSamePosition;
  }

  const handleDrop = ({ draggableID, destination, source }) => {
    if (!isPositionChanged(source, destination)) return


  }

  const handleCardDrop = () => {
    console.log('Dropped!')
  }

  const testList = [
    {title: 'drop0', dropID: 'drop0'},
    {title: 'drop1', dropID: 'drop1'},
    {title: 'drop2', dropID: 'drop2'},
    {title: 'drop3', dropID: 'drop3'}
  ]

  return (
    <DragDropContext onDragEnd={handleCardDrop}>
      <div className='flex mt-[26px] mx-[5px] gap-[10px]'>
        {testList.map((value) => (
          <ProgressColumn key={value.title} title={value.title} dropID={value.dropID} />
        ))}
      </div>
    </DragDropContext>
  )
}

export default Body;
