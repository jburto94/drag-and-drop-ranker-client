
import UploadListForm from '../upload-list-form/UploadListForm';
import EditableList from '../editable-list/EditableList';
import SavedList from '../saved-list/SavedList';
import AddListItemsForm from '../add-list-items-form/AddListItemsForm';

const Home = () => {
  return (
    <div className="Home">
      <div className='page-container container py-5'>
        <UploadListForm />
        <AddListItemsForm />
        <EditableList />
        <SavedList />
      </div>
    </div>
  );
}

export default Home;