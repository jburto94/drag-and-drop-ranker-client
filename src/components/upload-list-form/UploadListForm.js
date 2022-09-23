import { useContext, useEffect, useState } from 'react';
import { ListContext } from '../../context/ListContext';

const UploadListForm = () => {
  const { createList, setEdit, resetListData } = useContext(ListContext)
  const [textInput, setTextInput] = useState('');

  const handleChange = e => {
    setTextInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    createList(e.target.list_data.value);
    setEdit(true);
    setTextInput('');
  }

  return (
    <div className='UploadListForm'>
      <div>
        <h2 className='text-center mb-2'>Create Your List</h2>
        <p className='text-center mb-4'>Separate each item with a new line</p>
        <form onSubmit={handleSubmit}>
          <textarea
            name='list_data'
            value={textInput}
            onChange={handleChange}
            className='form-control mb-3'
            rows={12}
          />
          <button type='submit' className='btn btn-primary'>Upload New List</button>
        </form>
      </div>
    </div>
  )
};

export default UploadListForm;