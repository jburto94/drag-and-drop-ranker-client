import { useState, useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ListContext } from './context/ListContext';

import { ReactComponent as Trash } from './components/misc/trash.svg';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.scss';

const App = () => {
  const { list, onDragEnd, removeItem, createList, clearList } = useContext(ListContext)
  const [textInput, setTextInput] = useState('');

  const handleChange = e => {
    setTextInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.list_data.value)
    createList(e.target.list_data.value);
    setTextInput('');
  }

  return (
    <div className="App">
      <div className='UploadListFormContainer'>
        <form onSubmit={handleSubmit}>
          <textarea
            name='list_data'
            value={textInput}
            onChange={handleChange}
            className='form-control mb-3'
          />
          <button type='submit' className='btn btn-primary'>Submit New List</button>
        </form>
      </div>
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
                      <li 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <span>{index + 1}. {item.item}</span>
                        <Trash onClick={() => removeItem(item)} className='trash' />
                        {provided.placeholder}
                      </li>
                    )}
                  </Draggable>
                ))}
              </ul>
              {provided.placeholder}
              <button
                onClick={clearList}
                className='btn btn-warning'
              >Clear List</button>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;