import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { ListContext } from '../../context/ListContext';

import UploadListForm from '../upload-list-form/UploadListForm';
import EditableList from '../editable-list/EditableList';
import SavedList from '../saved-list/SavedList';
import AddListItemsForm from '../add-list-items-form/AddListItemsForm';
import TitleListForm from '../title-list-form/TitleListForm';

const Home = () => {
  const { isLoggedIn } = useContext(UserContext);
  const { list, edit, title } = useContext(ListContext);

  return (
    <div className="Home">
      <div className='page-container container py-5'>
        {list.length > 0 && isLoggedIn &&
          edit ? 
            <TitleListForm /> :
            <h2 className='mb-4'>{title}</h2>          
        }
        {list.length < 1 &&
          <UploadListForm />
        }
        <AddListItemsForm />
        <EditableList />
        <SavedList />
      </div>
    </div>
  );
}

export default Home;