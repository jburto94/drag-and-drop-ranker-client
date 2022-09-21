import { useContext } from "react";
import { ListContext } from "../../context/ListContext";

const AddListItemsButton = () => {
  const { setAdd } = useContext(ListContext);

  const handleAdd = () => {
    setAdd(true);
  };

  return (
    <button
      onClick={handleAdd}
      className='btn btn-success'
    >
      Add Items
    </button>
  );
};

export default AddListItemsButton;