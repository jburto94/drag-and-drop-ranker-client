import { useContext } from "react";
import { ListContext } from "../../context/ListContext";

const SaveListButton = () => {
  const { setEdit } = useContext(ListContext);

  const handleSave = () => {
    setEdit(false);
  };

  return (
    <button
      onClick={handleSave}
      className='btn btn-primary'
    >
      Save List
    </button>
  );
};

export default SaveListButton;