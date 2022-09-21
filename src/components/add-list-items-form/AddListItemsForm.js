import { useContext, useState } from 'react';
import { ListContext } from '../../context/ListContext';

const AddListItemsForm = () => {
  const { list, updateList, setEdit, add, setAdd } = useContext(ListContext)
  const [textInput, setTextInput] = useState('');

  const handleChange = e => {
    setTextInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    updateList(list, e.target.items_data.value);
    setEdit(true);
    setAdd(false);
    setTextInput('');
  }

  return (
    <div className='AddListItemsForm'>
      {add &&
        <div>
        <h2 className='text-center mb-2'>Add Items to your List</h2>
        <p className='text-center mb-4'>Separate each item with a new line</p>
        <form onSubmit={handleSubmit}>
          <textarea
            name='items_data'
            value={textInput}
            onChange={handleChange}
            className='form-control mb-3'
            rows={12}
          />
          <button type='submit' className='btn btn-primary'>Add Items</button>
        </form>
      </div>
      }
    </div>
  )
};

export default AddListItemsForm;