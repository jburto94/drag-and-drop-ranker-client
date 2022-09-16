import { useState, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { ReactComponent as Trash } from './components/misc/trash.svg';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.scss';

const listData = ["Lord of the Rings","Tropic Thunder","Step Brothers","The Matrix","Pulp Fiction"];
const defaultList = listData.map((item, idx) => ( { item: item, id: String(idx)} ));



const App = () => {
  const [list, setList] = useState([]);
  const [textInput, setTextInput] = useState('')
  const listRef = useRef(null);


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

  const handleChange = e => {
    setTextInput(e.target.value);
  }

  const convertUserInput = input => {
    // converts every newline into an item
    const cleanedInput = input.split(/\r?\n/);
    // removes any empty items (if the user added an empty linebreak)
    return cleanedInput.filter(item => item);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (listRef.current.value) {
      const oldListData = [...list];
      const newList = convertUserInput(listRef.current.value);
      // converts each list item to an object with an id
      const updatedList = newList.map((item, idx) => ( { item: item, id: String(idx)} ));
      setList(updatedList);
      setTextInput('');
    } else {
      setList([]);
    }
  }

  const clearListData = e => {
    e.preventDefault();
    setList([]);
  }

  return (
    <div className="App">
      <div className='UploadListFormContainer'>
        <form onSubmit={handleSubmit}>
          <textarea
            ref={listRef}
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
                onClick={clearListData}
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