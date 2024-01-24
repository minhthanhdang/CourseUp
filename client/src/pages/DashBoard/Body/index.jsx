import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import ProgressColumn from './ProgressColumn';
import { Droppable } from 'react-beautiful-dnd';
import DetailsCard from './DetailsCard';

const Body = ({ status, dashboardContent }) => {


  const handleDrop = ({ draggableID, destination, source }) => {
    if (!isPositionChanged(source, destination)) return


  }

  const handleCardDrop = () => {
    if (!isPositionChanged(source, destination)) return;



    console.log('Dropped!')
  }

  const cardList = [
    {index: 0, title: 'Todo1'},
    {index: 1, title: 'Todo2'},
    {index: 2, title: 'Todo3'},
  ]

  return (
    <div className='w-full'>
      <DragDropContext>
        <Droppable droppableId='main'>
          {provided => (
            <div className='flex flex-col my-[5px] min-h-[400px] w-full rounded-md'>
              <div
                className='h-full px-[5px] grid grid-cols-2 '
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {cardList.map(card=>(<DetailsCard index={card.index} content={card.title}/>))}
                {provided.placeholder}
              </div>
            </div>
          )}

        </Droppable>
      </DragDropContext>
    </div>
  )
}

const isPositionChanged = (destination, source) => {
  if (!destination) return false;
  const isSameList = destination.droppableId === source.droppableId;
  const isSamePosition = destination.index === source.index;
  return !isSameList || !isSamePosition;
}

const calculateColumnPosition = (...args) => {
  const { prevCard, nextCard } = get
}


const getAfterDropPrevNextIssue = (allIssues, destination, source, droppedIssueId) => {
  const beforeDropDestinationIssues = getSortedListIssues(allIssues, destination.droppableId);
  const droppedIssue = allIssues.find(issue => issue.id === droppedIssueId);
  const isSameList = destination.droppableId === source.droppableId;

  const afterDropDestinationIssues = isSameList
    ? moveItemWithinArray(beforeDropDestinationIssues, droppedIssue, destination.index)
    : insertItemIntoArray(beforeDropDestinationIssues, droppedIssue, destination.index);

  return {
    prevIssue: afterDropDestinationIssues[destination.index - 1],
    nextIssue: afterDropDestinationIssues[destination.index + 1],
  };
};
export default Body;
