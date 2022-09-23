import { useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ListContext } from '../../context/ListContext';
import AddListItemsButton from '../add-list-items-button/AddListItemsButton';
import ClearListButton from '../clear-list-button/ClearListButton';
import DeleteListButton from '../delete-list-button/DeleteListButton';
import EditableListItem from '../editable-list-item/EditableListItem';
import SaveListButton from '../save-list-button/SaveListButton';

import './EditableList.scss';

const EditableList = () => {
  const { list, onDragEnd, edit } = useContext(ListContext);
  
  return (
    <div className='EditableList'>
      {list && (list.length > 0 && edit) &&
        <DragDropContext
            onDragEnd={onDragEnd}
          >
            <Droppable droppableId='list'>
              {provided => (
                <div className='pt-4 pb-5'>
                  <div className='d-flex justify-content-between list-buttons-container mb-3'>
                    <div className='list-buttons'>
                      <SaveListButton />
                      <AddListItemsButton />
                    </div>
                    <div className='list-buttons'>
                      <ClearListButton />
                      <DeleteListButton />
                    </div>
                  </div>
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
                </div>
              )}
            </Droppable>
          </DragDropContext>
        }
    </div>
  )
}

export default EditableList;