import { useState } from "react";

const TitleList = () => {
  const [listTitle, setListTitle] = useState('');

  const handleChange = e => {
    setListTitle(e.target.value);
  }

  return (
    <div className="TitleList">
      <label className="form-label" htmlFor="list-title">Title Your List</label>
      <input 
        type="list-title"
        name="list-title"
        value={listTitle}
        onChange={handleChange}
        required
        id="list-title" 
        className="form-control" 
      />
    </div>
  );
};

export default TitleList;