import { Route, Routes } from 'react-router-dom';
import UploadListForm from './components/upload-list-form/UploadListForm';
import EditableList from './components/editable-list/EditableList';
import Footer from './components/partials/footer/Footer';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.scss';
import Navbar from './components/partials/navbar/Navbar';
import Home from './components/routes/Home';
import Login from './components/routes/Login';
import Register from './components/routes/Register';

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      {/* <Navbar />
      <div className='page-container container py-5'>
        <UploadListForm />
        <EditableList />
      </div>
      <Footer /> */}
    </div>
  );
}

export default App;