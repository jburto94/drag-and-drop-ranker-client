import { ReactComponent as MovementIcon } from './components/misc/movement.svg';
import { ReactComponent as Trash } from './components/misc/trash.svg';
import { useState, useRef } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.scss';

const defaultList = ['Jake', 'Maya', 'Julie', 'Scott', 'Maya', 'Julie', 'Scott', 'Maya', 'Julie', 'Scott', 'Maya', 'Julie', 'Scott', 'Maya', 'Julie', 'Scott', 'Maya', 'Julie', 'Scott', 'Maya', 'Julie', 'Scott', 'Maya', 'Julie', 'Scott', 'Maya', 'Julie', 'Scott', 'Maya', 'Julie', 'Scott'];

const App = () => {
  const [list, setList] = useState(defaultList);
  let dragItem = useRef();
  let dragOverItem = useRef();

  const dragStart = (e, rank) => {
    dragItem.current = rank;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  }

  const dragOver = (e, rank) => {
    dragOverItem.current = rank;

    if (dragItem.current === dragOverItem.current) {
      return;
    }

    const arrangedList = [...list];
    const draggedItem = arrangedList[dragItem.current];
    arrangedList.splice(dragItem.current, 1)
    arrangedList.splice(dragOverItem.current, 0, draggedItem);
    setList(arrangedList);
  }

  const dropItem = e => {
    dragItem.current = null;
    dragOverItem.current = null;
  }

  const removeItem = (rank) => {
    const updatedList = list.filter((item, idx) => idx !== rank)
    setList(updatedList)
  }

  return (
    <div className="App">
      <h2>List</h2>
      <ul className='bg-light py-5'>
        {list.map((item, idx)=> (
          <li key={idx}>
            <div>
              <span className='rank'>{idx + 1}</span>
              <div 
                className='drag' 
                draggable 
                onDragStart={e => dragStart(e, idx) }
                onDragEnter={e => dragOver(e, idx)}
                onDragEnd={e => dropItem(e)}
              >
                <MovementIcon />
              </div>
              <span>{item}</span>
              </div>
            <div 
              className='trash'
              onClick={() => removeItem(idx)}
            >
              <Trash />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;