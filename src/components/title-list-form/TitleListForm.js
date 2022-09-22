import { useContext, useState } from "react";
import { ListContext } from "../../context/ListContext";

const TitleListForm = () => {
  const { title, setTitle } = useContext(ListContext);

  const handleChange = e => {
    setTitle(e.target.value);
  }

  return (
    <div className="TitleListForm">
      <label className="form-label" htmlFor="list-title">Edit List Title</label>
      <input 
        type="list-title"
        name="list-title"
        value={title}
        onChange={handleChange}
        required
        id="list-title" 
        className="form-control" 
      />
    </div>
  );
};

export default TitleListForm;