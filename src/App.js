import UploadListForm from './components/upload-list-form/UploadListForm';
import EditableList from './components/editable-list/EditableList';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <UploadListForm />
      <EditableList />
    </div>
  );
}

export default App;