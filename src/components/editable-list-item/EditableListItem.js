import { useContext, useState } from 'react';
import { ListContext } from '../../context/ListContext';
import EditListItemForm from '../edit-list-item-form/EditListItemForm';
import { ReactComponent as Trash } from '../misc/trash.svg';
import { ReactComponent as Edit } from '../misc/edit.svg';
import './EditableListItem.scss';

const EditableListItem = ({provided, item, index}) => {
  const { removeItem } = useContext(ListContext);
  const [editItem, setEditItem] = useState(false);

  const handleEdit = () => {
    setEditItem(!editItem)
  }

  return (
    <li 
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className='EditableListItem'
    >
      <span className='rank'>{index + 1}.</span>
      {editItem ? (
        <EditListItemForm item={item} handleEdit={handleEdit} />
      ) : (
        <>
          <span className='item-text'>{item.item}</span>
          <div onClick={handleEdit} className='edit-container'>
            <Edit />
          </div>
        </>
      )}
      <button onClick={() => removeItem(item)} className='trash-container justify-self'>
        <Trash className='trash' />
      </button>
      {provided.placeholder}
    </li>
  );
};

export default EditableListItem;