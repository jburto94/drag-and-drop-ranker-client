import { useContext } from "react";
import { ListContext } from "../../context/ListContext";
import AddListItemsButton from "../add-list-items-button/AddListItemsButton";
import EditListButton from "../edit-list-button/EditListButton";

const SavedList = () => {
  const { list, edit } = useContext(ListContext);

  return (
    <div className="SavedListed">
      {list.length > 0 && !edit &&
        <div className="saved-list-container">
          {list.map((item, idx) => (
            <p key={item.id} className='mb-1'>{idx + 1}. {item.item}</p>
          ))}
          <div className='d-flex justify-content-between mt-4'>
            <EditListButton />
            <AddListItemsButton />
          </div>
        </div>
      }
    </div>
  )
};

export default SavedList;