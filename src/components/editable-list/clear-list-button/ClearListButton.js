import { useContext } from "react";
import { ListContext } from "../../../context/ListContext";


const ClearListButton = () => {
  const { clearList } = useContext(ListContext);
  
  return (
    <button
      onClick={clearList}
      className='btn btn-warning'
    >
      Clear List
    </button>
  );
};

export default ClearListButton;