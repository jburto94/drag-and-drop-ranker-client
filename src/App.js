import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { ReactComponent as Trash } from './components/misc/trash.svg';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.scss';

const listData = ["Lord of the Rings","Tropic Thunder","Step Brothers","The Matrix","Pulp Fiction"];
const defaultList = listData.map((item, idx) => ( { item: item, id: String(idx)} ))

const App = () => {
  const [list, setList] = useState(defaultList);

  const onDragEnd = item => {
    if (!item.destination || item.destination.index === item.source.index) {
      return;
    }

    const updatedList = [...list];
    const [updatedItem] = updatedList.splice(item.source.index, 1);
    updatedList.splice(item.destination.index, 0, updatedItem);

    setList(updatedList);
  }

  const removeItem = item => {
    const updatedList = [...list].filter(listItem => listItem.id !== item.id);
    setList(updatedList);
  }

  return (
    <div className="App">
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <Droppable droppableId='list'>
          {provided => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {list.map((item, index) => (
                <Draggable 
                  key={item.id} 
                  draggableId={item.id} 
                  index={index}
                >
                  {provided => (
                    <li 
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span>{index + 1}. {item.item}</span>
                      <Trash onClick={() => removeItem(item)} className='trash' />
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;