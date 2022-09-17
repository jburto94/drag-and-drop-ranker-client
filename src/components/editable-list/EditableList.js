import { useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ListContext } from '../../context/ListContext';
import ClearListButton from './clear-list-button/ClearListButton';

import EditableListItem from './editable-list-item/EditableListItem';

import './EditableList.scss';

const EditableList = () => {
  const { list, onDragEnd } = useContext(ListContext);
  
  return (
    <div className='EditableList'>
      {list.length > 0 &&
        <DragDropContext
            onDragEnd={onDragEnd}
          >
            <Droppable droppableId='list'>
              {provided => (
                <div className='py-5'>
                  <ul {...provided.droppableProps} ref={provided.innerRef}>
                    {list.map((item, index) => (
                      <Draggable 
                        key={item.id} 
                        draggableId={item.id} 
                        index={index}
                      >
                        {provided => (
                          <EditableListItem 
                            provided={provided}
                            item={item}
                            index={index}
                          />
                        )}
                      </Draggable>
                    ))}
                  </ul>
                  {provided.placeholder}
                  <ClearListButton />
                </div>
              )}
            </Droppable>
          </DragDropContext>
        }
    </div>
  )
}

export default EditableList;