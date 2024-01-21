import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import ProgressColumn from './ProgressColumn';

const Body = ({ status, dashboardContent }) => {


  const handleDrop = ({ draggableID, destination, source }) => {
    if (!isPositionChanged(source, destination)) return


  }

  const handleCardDrop = () => {
    if (!isPositionChanged(source, destination)) return;



    console.log('Dropped!')
  }

  const progressList = [
    {title: 'In Progress', dropID: 'In Progress', content: dashboardContent.inProgress},
    {title: 'Not Started', dropID: 'Not Started', content: dashboardContent.notStarted},
    {title: 'Completed', dropID: 'Completed', content: dashboardContent.completed}
  ]

  return (
    <DragDropContext onDragEnd={handleCardDrop}>
      <div className='flex mt-[26px] mx-[5px] gap-[10px]'>
        {progressList?.map((value) => (
          <ProgressColumn key={value.title} title={value.title} dropID={value.dropID} content={value.content}/>
        ))}
      </div>
    </DragDropContext>
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
