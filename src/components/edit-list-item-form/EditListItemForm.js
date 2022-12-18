import { useContext, useState } from 'react';
import { ListContext } from '../../context/ListContext';

const EditListItemForm = ({item, handleEdit}) => {
  const { updateItem } = useContext(ListContext);
  const [itemInput, setItemInput] = useState(item.item);

  const handleChange = e => {
    setItemInput(e.target.value);
  }

  const handleSubmit = () => {
    updateItem({...item, item: itemInput});
    handleEdit();
  }

  return (
    <span>
      <input 
        type='text'
        name='item'
        value={itemInput}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} className='btn btn-primary'>Save</button>
    </span>
  );
};

export default EditListItemForm;