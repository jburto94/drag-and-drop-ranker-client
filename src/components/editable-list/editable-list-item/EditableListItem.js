import { useContext } from 'react';
import { ListContext } from '../../../context/ListContext';

import { ReactComponent as Trash } from '../../misc/trash.svg';
import './EditableListItem.scss';

const EditableListItem = ({provided, item, index}) => {
  const { removeItem } = useContext(ListContext);
  return (
    <li 
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className='EditableListItem'
    >
      <span className='rank'>{index + 1}.</span>
      <span className='item-text'>{item.item}</span>
      <div onClick={() => removeItem(item)} className='trash-container justify-self'>
        <Trash className='trash' />
      </div>
      {provided.placeholder}
    </li>
  );
};

export default EditableListItem;