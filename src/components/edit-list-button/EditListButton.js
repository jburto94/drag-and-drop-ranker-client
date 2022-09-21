import { useContext } from "react";
import { ListContext } from "../../context/ListContext";

const EditListButton = () => {
  const { setEdit } = useContext(ListContext);

  const handleSave = () => {
    setEdit(true);
  };

  return (
    <button
      onClick={handleSave}
      className='btn btn-warning'
    >
      Edit List
    </button>
  );
};

export default EditListButton;