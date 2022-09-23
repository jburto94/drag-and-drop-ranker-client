import { useContext } from "react";
import { ListContext } from "../../context/ListContext";
import DeleteListButton from "../delete-list-button/DeleteListButton";
import EditListButton from "../edit-list-button/EditListButton";

const SavedList = () => {
  const { list, edit } = useContext(ListContext);

  return (
    <div className="SavedListed">
      {list.length > 0 && !edit &&
        <div className="saved-list-container">
        <div className='d-flex justify-content-between my-4'>
          <EditListButton />
          <DeleteListButton />
        </div>
          {list.map((item, idx) => (
            <p key={item.id} className='mb-1'>{idx + 1}. {item.item}</p>
          ))}
        </div>
      }
    </div>
  )
};

export default SavedList;